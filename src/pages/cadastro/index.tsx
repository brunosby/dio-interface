import { useNavigate } from 'react-router-dom';
import {MdEmail, MdLock} from 'react-icons/md'
import { FaUserAlt } from "react-icons/fa";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'

import { Container, TextContent, Title, Column, Row, Wrapper, LoginText, PreLoginText} from './styles'

import * as yup from "yup";
import { IFormData } from './types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
    nome: yup.string().required('Campo obrigatório'),
  }).required();

const Cadastro = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema), 
        mode: 'onChange',
    });

    const navigate = useNavigate();
    const handleClickSignIn = () =>{
        navigate("/cadastro")
    }

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<FaUserAlt />}/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Criar minha conta" variant='secondary' onClick={handleClickSignIn} />
                    <Row>
                        <TextContent>
                            Ao Clicar em "criar minha conta grátis", declaro que aceito as Politicas de Privacidade e os Termos de Uso da DIO.
                        </TextContent>
                    </Row>
                    <Row>
                        <PreLoginText>
                            Já tenho conta.
                        </PreLoginText>
                        <LoginText>
                            Fazer Login
                        </LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export {Cadastro}