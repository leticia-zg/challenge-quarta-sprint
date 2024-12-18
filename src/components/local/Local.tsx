import Link from "next/link";
import { useEffect, useState, useCallback } from 'react';
import "./Local.css";
import Image from 'next/image';

interface Local {
  lat: number;
  lng: number;
  nome: string;
}

let map: google.maps.Map | undefined;
let geocoder: google.maps.Geocoder | undefined;
let markers: google.maps.Marker[] = [];

const Local = () => {
  const [cep, setCep] = useState<string>("");

  // Função para inicializar o mapa
  const initMap = useCallback(() => {
    const mapElement = document.getElementById("map") as HTMLElement;
    if (!mapElement) return;

    map = new google.maps.Map(mapElement, {
      center: { lat: -23.5505, lng: -46.6333 }, // São Paulo como posição padrão
      zoom: 12,
    });
    geocoder = new google.maps.Geocoder();

    // Exemplo de locais já definidos no mapa
    const locais: Local[] = [
      { lat: -23.5346, lng: -46.7214, nome: "CENTRO AUTOMOTIVO - LAPA" },
      { lat: -23.5631, lng: -46.7325, nome: "CENTRO AUTOMOTIVO - BUTANTÃ" },
      { lat: -23.5491, lng: -46.4660, nome: "CENTRO AUTOMOTIVO - PENHA TIQUATIRA" },
      { lat: -23.5304, lng: -46.7301, nome: "CENTRO AUTOMOTIVO - LEOPOLDINA" },
      { lat: -23.5247, lng: -46.7159, nome: "CENTRO AUTOMOTIVO - PARQUE SAO DOMINGOS" },
      { lat: -23.5079, lng: -46.9072, nome: "CENTRO AUTOMOTIVO - BARUERI" },
      { lat: -23.3386, lng: -46.9423, nome: "CENTRO AUTOMOTIVO - JANDIRA" },
      { lat: -23.5272, lng: -46.8443, nome: "CENTRO AUTOMOTIVO - CARAPICUIBA VILA CALDAS" },
      { lat: -23.5328, lng: -46.7927, nome: "CENTRO AUTOMOTIVO - OSASCO HELENA MARIA" },
      { lat: -23.5320, lng: -46.8044, nome: "CENTRO AUTOMOTIVO - OSASCO CENTRO" },
      { lat: -23.5432, lng: -46.6669, nome: "CENTRO AUTOMOTIVO - USP AV. CORIFEU" },
      { lat: -23.5280, lng: -46.6281, nome: "CENTRO AUTOMOTIVO - CANINDE GLOBAL" },
      { lat: -23.4589, lng: -46.5330, nome: "CENTRO AUTOMOTIVO - GUARULHOS TIMOTEO" },
      { lat: -23.5033, lng: -46.4390, nome: "CENTRO AUTOMOTIVO - ITAIM PAULISTA" },
      { lat: -23.4541, lng: -46.4387, nome: "CENTRO AUTOMOTIVO - GUAIANAZES" },
      { lat: -23.5510, lng: -46.3143, nome: "CENTRO AUTOMOTIVO - SUZANO" },
      { lat: -23.5033, lng: -46.4390, nome: "CENTRO AUTOMOTIVO - ITAIM PAULISTA" }, // Repetido
      { lat: -23.7255, lng: -46.5634, nome: "CENTRO AUTOMOTIVO - SBC / ASSUNÇÃO" },
      { lat: -23.6394, lng: -46.8320, nome: "CENTRO AUTOMOTIVO - VARGEM GRANDE PAULISTA" },
      { lat: -23.5070, lng: -46.9074, nome: "CENTRO AUTOMOTIVO - ALPHAVILLE" },
    ];

    adicionarMarcadores(locais);
  }, []); // Com useCallback, a função não vai mudar entre as renderizações

  // Função para adicionar múltiplos marcadores
  const adicionarMarcadores = (locais: Local[]) => {
    // Limpa os marcadores anteriores
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    locais.forEach(local => {
      const marker = new google.maps.Marker({
        position: { lat: local.lat, lng: local.lng },
        map: map,
        title: local.nome,
      });
      markers.push(marker);

      // Adiciona infoWindow para cada marcador
      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${local.nome}</h3>`,
      });

      // Evento para abrir o infoWindow ao clicar no marcador
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };

  // Função para buscar o CEP e adicionar marcador correspondente
  const buscarPorCep = () => {
    if (geocoder && cep) {
      geocoder.geocode({ address: cep }, (results, status) => {
        if (status === "OK" && map && results && results[0]) {
          const location = results[0].geometry.location;

          // Move o mapa para a nova localização
          map.setCenter(location);
          map.setZoom(15);

          // Adiciona um marcador para o CEP inserido
          adicionarMarcadores([{ lat: location.lat(), lng: location.lng(), nome: "Local Encontrado" }]);
        } else {
          alert("CEP não encontrado: " + status);
        }
      });
    } else {
      alert("Por favor, insira um CEP válido");
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBejeDQYGbpbrVMPP5QHeFBCo2t1y5kTdg`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [initMap]); // Agora, `initMap` está no array de dependências

  return (
    <section className="localizacao">
      <p className="mecanico">Mecânicos Parceiros</p>
      <h2 className="cep">Descubra qual o parceiro mais próximo de você!</h2>
      <form className="search">
        <input
          className="insert"
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <Image
          className="img-map"
          src="/imgs/lupa.png"
          alt="Buscar"
          onClick={buscarPorCep}
          width={20} 
          height={20}
        />
      </form>
      <section className="locais">
        <div>
          <ul className="oficinas">
            <li>
              <Image 
                src="/imgs/local.png" 
                alt="icone localização"
                width={32} 
                height={42} />
              <p>Rua LUIS GAMA 185 - MOOCA - SAO PAULO/SP</p>
              <hr />
            </li>
            <li>
              <Image 
                src="/imgs/local.png" 
                alt="icone localização"
                width={32} 
                height={42} />
              <p>Rua CONSELHEIRO RAMALHO 487 - BELA VISTA - SAO PAULO/SP</p>
              <hr />
            </li>
            <li>
              <Image 
                src="/imgs/local.png" 
                alt="icone localização"
                width={32} 
                height={42} />
              <p>Rua HELVETIA 468 - CAMPOS ELISEOS - SAO PAULO/SP</p>
              <hr />
            </li>
            <li>
              <Image 
                src="/imgs/local.png" 
                alt="icone localização"
                width={32} 
                height={42} />
              <p>Rua DOUTOR FREIRE 192 - BRÁS - SÃO PAULO/SP</p>
            </li>
          </ul>
          <div className="button">
            <Link href="https://www.portoseguro.com.br/fale-conosco/contatos/enderecos/oficinas-referenciadas">
              <button className="vermais" value="mais">Ver todos</button>
            </Link>
          </div>
        </div>
        <div id="map" className="mapa"></div>
      </section>
    </section>
  );
};

export default Local;
