const puppeteer = require('puppeteer');
const xlsx = require('xlsx');
const path = require('path');

async function fetchAndSavePage(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Extraindo os dados da tabela
    const data = await page.evaluate(() => {
        const rows = document.querySelectorAll('table tbody tr');
        let tableData = [];

        rows.forEach(row => {
            const cols = row.querySelectorAll('td');
            if (cols.length === 4) { // Garante que tenha 4 colunas
                tableData.push({
                    'Coluna 1': cols[0].innerText.trim(),
                    'Coluna 2': cols[1].innerText.trim(),
                    'Coluna 3': cols[2].innerText.trim(),
                    'Coluna 4': cols[3].innerText.trim(),
                });
            }
        });

        return tableData;
    });

    await browser.close();

    // Criar um workbook e uma worksheet
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);

    // Adicionar a worksheet ao workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, "Dados");

    // Caminho para salvar o arquivo
    const filePath = path.join("D:\\Gestão de Projetos\\Projetos de Node.js\\Web-Scraping", "dados_extraidos.xlsx");

    // Escrever o arquivo Excel
    xlsx.writeFile(workbook, filePath);

    console.log(`📁 Arquivo Foi salvo com sucesso em: ${filePath} 📁`);
}

// URL da página a ser extraída
const url = 'https://www.confaz.fazenda.gov.br/legislacao/convenios/2018/CV142_18';
fetchAndSavePage(url);