function simular() {

    let produtividade = 50;
    let lucro = 10000;
    let co2 = 100;
    let agua = 50;
    let sustentabilidade = 50;

    const cultura =
        document.getElementById("cultura").value;

    const solo =
        document.getElementById("solo").value;

    const irrigacao =
        document.getElementById("irrigacao").value;

    const fertilizante =
        document.getElementById("fertilizante").value;

    // CULTURA

    if(cultura === "soja"){
        produtividade += 15;
        lucro += 3000;
    }

    if(cultura === "milho"){
        produtividade += 20;
        lucro += 4000;
    }

    if(cultura === "hortalicas"){
        produtividade += 25;
        lucro += 5000;
        agua -= 10;
    }

    // SOLO

    if(solo === "plantio_direto"){
        sustentabilidade += 20;
        co2 -= 20;
        agua += 15;
    }

    // IRRIGAÇÃO

    if(irrigacao === "gotejamento"){
        agua += 30;
        sustentabilidade += 15;
        lucro += 1000;
    }

    // FERTILIZANTE

    if(fertilizante === "organico"){
        sustentabilidade += 20;
        co2 -= 25;
        lucro -= 500;
    }else{
        produtividade += 10;
    }

    document.getElementById("produtividade")
        .innerHTML = produtividade + " toneladas";

    document.getElementById("lucro")
        .innerHTML = "R$ " + lucro.toLocaleString("pt-BR");

    document.getElementById("co2")
        .innerHTML = co2 + " kg";

    document.getElementById("agua")
        .innerHTML = agua + "%";

    document.getElementById("sustentabilidade")
        .innerHTML = sustentabilidade + "/100";

}