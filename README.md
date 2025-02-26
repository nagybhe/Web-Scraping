# Web Scraping de Convenções CONFaz com Node.js

Este projeto realiza web scraping no site do CONFaz para extrair dados da página do Convênio 142/18. Ele utiliza **Node.js**, **Puppeteer** para automação da navegação, **XLSX** para exportação dos dados em planilhas e **Path** para manipulação de diretórios.

## 🔹 Tecnologias Utilizadas

- **Puppeteer**: Automatiza a extração de dados do site.
- **XLSX**: Gera arquivos Excel com os dados coletados.
- **Path**: Gerencia caminhos de arquivos no sistema.

## ⚙ Funcionamento

1. O **Puppeteer** acessa o site do CONFaz e localiza os dados do **Convênio 142/18**.
2. Os dados são extraídos e estruturados.
3. O conteúdo raspado é salvo em um arquivo **Excel (.xlsx)**.

## 📌 Como Executar o Projeto

### 1️⃣ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- Gerenciador de pacotes (**npm** ou **yarn**)

### 2️⃣ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/nagybhe/Web-Scraping.git
cd seu-repositorio
npm install
