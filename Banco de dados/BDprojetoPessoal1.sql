create database projetoPessoal;
use projetoPessoal;

create table usuario (
id int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(20),
soad boolean,
slipknot boolean,
metallica boolean,
blackSabbath boolean
);

