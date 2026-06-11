// Aguarda a página carregar completamente antes de ativar o clique
document.addEventListener('DOMContentLoaded', function() {
    
    const botaoSimular = document.getElementById('btn-simular');

    if (botaoSimular) {
        botaoSimular.addEventListener('click', function() {
            // Capturando os dados selecionados pelo usuário
            const cultura = document.getElementById('cultura').value;
            const solo = document.getElementById('solo').value;
            const irrigacao = document.getElementById('irrigacao').value;
            const fertilizante = document.getElementById('fertilizante').value;

            // Definição das variáveis base da simulação
            let produtividade = 100;
            let custoBase = 50000;
            let faturamentoBase = 120000;
            let agua = 100;
            let co2 = 0;
            let feedbackDicas = "";

            // 1. Cálculo do impacto do Tipo de Cultura
            if (cultura === 'soja_comum') {
                produtividade += 5;
                custoBase += 8000;
                co2 -= 10;
                feedbackDicas += "• A <b>monocultura</b> desgasta os nutrientes específicos do solo rapidamente.<br>";
            } else if (cultura === 'rotacao_graos') {
                produtividade += 15;
                co2 += 20;
                agua += 10;
                feedbackDicas += "• A <b>rotação de culturas</b> melhora a biologia da terra e corta ciclos de pragas naturalmente.<br>";
            } else if (cultura === 'agrofloresta') {
                produtividade -= 10;
                faturamentoBase += 25000;
                co2 += 50;
                agua += 30;
                feedbackDicas += "• A <b>agrofloresta</b> recria ecossistemas nativos, absorvendo muito carbono!<br>";
            }

            // 2. Cálculo do impacto do Manejo do Solo
            if (solo === 'arado') {
                produtividade -= 5;
                co2 -= 15;
                feedbackDicas += "• <b>Arar a terra</b> expõe o solo ao calor, liberando o carbono estocado e facilitando erosões.<br>";
            } else if (solo === 'direto') {
                produtividade += 10;
                custoBase -= 4000;
                co2 += 15;
                feedbackDicas += "• O <b>plantio direto</b> protege a umidade do solo sob a palha da colheita anterior.<br>";
            }

            // 3. Cálculo do impacto do Sistema de Irrigação
            if (irrigacao === 'aspersao') {
                agua -= 30;
                custoBase += 3000;
                feedbackDicas += "• A irrigação por <b>aspersão</b> perde muita água por evaporação antes de atingir a raiz.<br>";
            } else if (irrigacao === 'gotejamento') {
                agua += 25;
                produtividade += 5;
                feedbackDicas += "• O <b>gotejamento</b> aplica a água direto no alvo, zerando o desperdício excessivo.<br>";
            }

            // 4. Cálculo do impacto de Fertilizantes e Insumos
            if (fertilizante === 'quimico') {
                produtividade += 10;
                custoBase += 15000;
                agua -= 20;
                feedbackDicas += "• O uso massivo de <b>químicos sintéticos</b> pode contaminar lençóis freáticos vizinhos.<br>";
            } else if (fertilizante === 'integrado') {
                produtividade += 8;
                custoBase += 5000;
                co2 += 5;
                feedbackDicas += "• O <b>manejo integrado</b> usa a quantidade química estritamente necessária junto a biológicos.<br>";
            } else if (fertilizante === 'bio') {
                produtividade += 2;
                custoBase -= 7000;
                co2 += 25;
                feedbackDicas += "• Os <b>bioinsumos</b> devolvem microrganismos vivos que regeneram a fertilidade natural.<br>";
            }

            // Travas lógicas para evitar números fora da realidade física
            if (agua > 150) agua = 150;
            if (agua < 10) agua = 10;

            // Fórmulas Financeiras Finais
            let rendimentoFinal = faturamentoBase * (produtividade / 100);
            let lucroLiquido = rendimentoFinal - custoBase;

            // Atualizando as informações do Dashboard (Interface do usuário)
            document.getElementById('val-prod').innerText = `${produtividade}%`;
            document.getElementById('val-lucro').innerText = `R$ ${lucroLiquido.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
            document.getElementById('val-agua').innerText = `${agua}%`;
            document.getElementById('val-co2').innerText = `${co2}%`;

            // Geração do Veredito Geral
            let vereditoFinal = "";
            if (lucroLiquido >= 75000 && co2 >= 30) {
                vereditoFinal = "<strong>🏆 Fazenda Modelo de Sucesso!</strong> Você atingiu o equilíbrio perfeito. Sua propriedade fatura alto enquanto regenera o meio ambiente.";
            } else if (lucroLiquido > 65000 && co2 <= 0) {
                vereditoFinal = "<strong>💰 Lucro a curto prazo...</strong> Seu retorno financeiro é bom agora, mas o desgaste ecológico tornará sua fazenda cara no futuro.";
            } else if (lucroLiquido < 40000 && co2 >= 45) {
                vereditoFinal = "<strong>🌿 Santuário Ecológico!</strong> A natureza agradece sua proteção extrema, mas revise os custos para não quebrar financeiramente.";
            } else {
                vereditoFinal = "<strong>⚠️ Alerta de Ajuste!</strong> Este arranjo produtivo está gastando demais ou degradando recursos preciosos. Experimente unir Rotação de Culturas e Plantio Direto.";
            }

            // Exibe os textos finais combinados dentro da caixa azul
            document.getElementById('feedback').innerHTML = `${vereditoFinal}<br><br>${feedbackDicas}`;
        });
    }
});