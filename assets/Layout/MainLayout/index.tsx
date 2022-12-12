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
            <h1>GESTOR OKR</h1>
            <S.Options>
                <div>
                <span>Setores</span>
                <span>Setores</span>
                <span>Setores</span>
                <span>Setores</span>
                </div>
                <div>
                    <span>Nome user</span>
                    <span>Sair do Gestor OKR</span>
                </div>
            </S.Options>
            </S.Main>
            <S.ContainerMain>
                <S.Header>
                    <S.Search>
                        <S.InputSearch type='text' id='search'  placeholder="Pesquisar OKR ou Setor"/>
                        <button onClick={()=>{''}}>bb</button>
                    </S.Search>
                    <S.Button>Adicionar OKR</S.Button>
                </S.Header>
                {/*showSearch ?  <SearchList result={result} getSearch={getSearch} search={search}/> : <article>{children}</article> */ }
                <article>{children}</article>
            </S.ContainerMain>
        </S.Container>
    );
}
