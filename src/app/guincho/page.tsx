"use client"; 
import './style.css';
import Footer from '../../components/footer/Footer';
import { Layout } from "../../components/layout/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from 'next/image';

const schema = yup.object().shape({
    origem: yup.string().required("*Campo obrigatório"),
    destino: yup.string().required("*Campo obrigatório"),
    placa: yup.string().required("*Campo obrigatório"),
    cor: yup.string().required("*Campo obrigatório"),
    ano: yup
    .mixed()
    .required("*Campo obrigatório")
    .test("is-positive-integer", "*Campo obrigatório", (value) => {
        if (value === undefined || value === null) {
            return false; 
        }
        const numValue = Number(value);
        return !isNaN(numValue) && Number.isInteger(numValue) && numValue > 0;
    }),

});


export default function Guincho() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data : any) => {
        const formattedData = {
            ...data,
            ano: Number(data.ano), 
        };

        alert(`Solicitação enviada com os seguintes dados:\nOrigem: ${formattedData.origem}\nDestino: ${formattedData.destino}\nPlaca: ${formattedData.placa}\nCor: ${formattedData.cor}\nAno: ${formattedData.ano}`);
    
        reset();
    };

    return (
        <>
            <Layout>
                <main className="main-guincho">
                    <h1 className="h1-guincho">Solicitar Guincho</h1>
                    <h2 className="h2-guincho">Precisando de guincho?</h2>
                    <h3 className="descricao-guincho">Deixe que a Porto cuida disso!</h3>
                    <div className="preco-guincho">
                        <span>R$ 349,90 em até 10x sem juros</span>
                    </div>
                    <div className="imagem-container-guincho">
                        <Image width={440} 
                    height={305} src="/imgs/guincho.png" alt="Imagem de um guincho" className="imagem-guincho" />
                    </div>
                    <form id="form-guincho" aria-labelledby="form-guincho-heading" onSubmit={handleSubmit(onSubmit)}>
                        <h2 id="form-guincho-heading" className="visually-hidden">Formulário de Solicitação de Guincho</h2>
                        <div className="form-div-guincho">
                            <label htmlFor="origem" className="form-label-guincho">Endereço de origem:<span className="campo-guincho">*</span></label>
                            <input type="text" id="origem" {...register("origem")} className="form-input-guincho" aria-label="Endereço de origem" />
                            {errors.origem && <span className="error-guincho">{errors.origem.message}</span>}
                        </div>
                        <div className="form-div-guincho">
                            <label htmlFor="destino" className="form-label-guincho">Endereço de destino:<span className="campo-guincho">*</span></label>
                            <input type="text" id="destino" {...register("destino")} className="form-input-guincho" aria-label="Endereço de destino" />
                            {errors.destino && <span className="error-guincho">{errors.destino.message}</span>}
                        </div>
                        <div className="form-div-guincho">
                            <label htmlFor="placa" className="form-label-guincho">Qual a placa?:<span className="campo-guincho">*</span></label>
                            <input type="text" id="placa" {...register("placa")} className="form-input-guincho" aria-label="Qual a placa?" />
                            {errors.placa && <span className="error-guincho">{errors.placa.message}</span>}
                        </div>
                        <div className="form-div-guincho">
                            <label htmlFor="cor" className="form-label-guincho">Qual a cor?:<span className="campo-guincho">*</span></label>
                            <input type="text" id="cor" {...register("cor")} className="form-input-guincho" aria-label="Qual a cor?" />
                            {errors.cor && <span className="error-guincho">{errors.cor.message}</span>}
                        </div>
                        <div className="form-div-guincho">
                            <label htmlFor="ano" className="form-label-guincho">Qual o ano do veículo?:<span className="campo-guincho">*</span></label>
                            <input type="number" id="ano" {...register("ano")} className="form-input-guincho" aria-label="Qual o ano do veículo?" />
                            {errors.ano && <span className="error-guincho">{errors.ano.message}</span>}
                        </div>
                        <p className="info-guincho">Incluso: Atendimento em todo o território nacional, remoção do veículo e transporte até o local desejado.</p>
                        <span className="importante-info-guincho">Importante! Na hora de contratar o serviço, informe o endereço exato do local onde o veículo se encontra.</span>
                        <div className="submit-container-guincho">
                            <button type="submit" className="submit-btn-guincho">Enviar</button>
                        </div>
                    </form>
                    <ul className="info-list-guincho">
                        <li>É necessário a presença de um responsável maior de 18 anos, tanto no local de retirada quanto no local de destino; caso contrário, o serviço não será realizado e será cobrado o valor integral do serviço.</li>
                        <li>É importante que você retire todos os seus objetos pessoais e de valor do interior do automóvel ou do compartimento da moto para evitar a perda de algum objeto durante o trajeto.</li>
                        <li>No momento da remoção, deverá ser apresentado o documento do veículo e documento do responsável.</li>
                        <li>É importante avisar o prestador caso o veículo possua algum sistema de travas, segredos, alarmes, sensores de presença, rastreadores, bloqueadores ou similares.</li>
                        <li>Em casos de acidentes de trânsito com vítimas, o guincho só poderá ser acionado depois da liberação policial. Isso evita cobranças adicionais por tempo de espera do guincho com o prestador.</li>
                    </ul>
                </main>
                <Footer />
            </Layout>
        </>
    );
}
