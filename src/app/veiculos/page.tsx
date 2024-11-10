"use client";

import { useEffect, useState } from "react";
import "./style.css";
import Image from 'next/image';
import { Layout } from "../../components/layout/Layout";

interface VeiculoCliente {
  idVeiculoCliente: number;
  idCliente: number;
  placaVeiculo: string;
  idModeloVeiculo: number;
}

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState<VeiculoCliente[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchVeiculos = async () => {
      try {
        const response = await fetch('http://localhost:8080/veiculo');
        
        // Verificar se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }
        
        const data = await response.json();
        setVeiculos(data);
      } catch (err: any) {
        setError(`Erro: ${err.message}`);
      }
    };

    fetchVeiculos();
  }, []);

  return (
    <main className= "main-veiculos">
        <Layout>
      <h1 className="h1-veiculos">Veículos Cadastrados</h1>

      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : (
        <div className="pecas-auto">
          {veiculos.length > 0 ? (
            veiculos.map((veiculo) => (
              <div key={veiculo.idVeiculoCliente} className="veiculo-article">
                <Image
                    src="/imgs/fusca.png"
                    className="veiculo-img" 
                    alt="fusca" 
                    role="img" 
                    width={240}  
                    height={180}
                 />
                <div className="text-container">
                  <p className="veiculo-p">ID Veículo:{veiculo.idVeiculoCliente}</p>
                  <p className="veiculo-p">ID Cliente:{veiculo.idCliente}</p>
                  <p className="veiculo-p">Placa:{veiculo.placaVeiculo}</p>
                  <p className="veiculo-p">ID Modelo Veículo:{veiculo.idModeloVeiculo}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      )}
    </Layout>
    </main>
  );
};

export default Veiculos;
