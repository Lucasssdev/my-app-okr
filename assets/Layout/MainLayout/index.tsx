import * as S from "./styles";
//import Menu from "../../Menu";
import React from "react";
//import AlertLogin from "../../AlertLogin";
//import { useEffect, useState } from "react";
//import axios from "axios";
//import SearchList from '../../SeacrhList'
//import Cookies from 'js-cookie';
//import jwt from 'jsonwebtoken'
import { ReactNode } from "react";
import logoPurple from '../../../public/logoPurple.svg'
import Image from "next/image";
import ButtonMain from "../../../assets/Componets/Buttons/ButtonMain";
import  InputSearch from "../../../assets/Componets/Inputs/InputSearch";

import {faBuilding, faHouse, faBookBookmark, faSignIn,faMagnifyingGlass, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props  {
    children: ReactNode
}
export default function MainLayout({ children } : Props) {
    
    /*const appToken = Cookies.get('application-token');
    const dados = jwt.decode(appToken);
    console.log('USER DATA FROM TOKEN', dados   )

    const admin = dados?.admin || false;
    console.log(admin)
    const empresa = dados?.company || null;

    const [search,setSearch] = useState({
        string: ''
    })
    const [result,setResult] = useState([])
    const [showSearch,setShowSearch] = useState(false)

   
    
    const getSearch= async (namePatrimony)=>{
   
        console.log(namePatrimony);
        
        await axios.get('http://localhost:3001/patrimony/patrimonies/search',{
            params: {name: namePatrimony, codEmpresa: empresa.id,},
        })
        .then((res)=>{
            console.log('BUSCANDO')
            console.log(res.data,'++++++++++++')
            setResult(res.data)  ;
        })
        //return patrimonies;
    }
    
    const submitSearch= async ()=>{
        console.log('Realizando a busca...')
       const result = await  getSearch(search.patrimony);
        console.log('Dados da busca ');
        console.table( result);
    }

    const handleOnSearch = async (e) => {  
        const key = e.target.id;
        const value = e.target.value;
           
            setSearch((search) => (
                value == ' '
                ?{ 
                    ...search,
                    [key]:  value.trim(),
                }
                :{
                    ...search,
                    [key]:  value,
                }
            ));

            if( value != '' && value != ' '){
                console.log('entrou')
                 await getSearch(value)
                setShowSearch(true)
            }else{
                setShowSearch(false)
            }
             
    }
    */
    return (
        <S.Container>
            <S.Main>
            <S.Logo>
                <Image width={250}  src={logoPurple} alt='logo'/>
            </S.Logo>
            <S.Options>
                <div>
                    <ButtonMain Icon={faHouse} Text={"Inicio"}/>                    
                    <ButtonMain Icon={faBuilding} Text={"Empresa"}/>
                    <ButtonMain Icon={faBookBookmark} Text={"Setor"}/>
                    
                </div>
                <div>
                    <a>Nome user</a>
                    <ButtonMain Icon={faSignIn} Text={'Sair do Gestor OKR'}/>
                </div>
            </S.Options>
            </S.Main>
            <S.ContainerMain>
                <S.Header>
                    <S.Search>
                        <InputSearch Placeholder="Pesquisao OKR ou Setor" Icon={faMagnifyingGlass}/>
                    </S.Search>
                    <S.Button>Adicionar OKR<FontAwesomeIcon icon={faPlusCircle} size="xl"/></S.Button>
                </S.Header>
                {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */ }
                <article>{children}</article>
            </S.ContainerMain>
        </S.Container>
    );
}
