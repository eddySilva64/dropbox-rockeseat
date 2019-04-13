/**
 * Arquivo principal da minha aplicação, nele que eu irei starta a minha aplicação
 */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://week6:week6@cluster0-2fs8x.mongodb.net/week?retryWrites=true',{
    useNewUrlParser: true
})

/**
 * Serve para cadastrar um modolo dentro do meu express
 */

//Json vai receber dados do meu frontend ou do meu servidor e fazer um retorno em formato Json
app.use(express.json());

/**
 * Urlencoded ele permite o envio de arquivos em nossas requisições
 */
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3003);