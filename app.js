const produits = [
    {
        nom: "Ballon de football",
        prix: 30 ,
        description: "Ballon de la Ligue des Champions, taille 5",
        image: "https://www.cdiscount.com/pdt2/2/9/8/1/1200x1200/adi4057282951298/rw/ballon-training-adidas-ucl-finale-16-blanc-acier.jpg"
    },
    {
        nom: "Maillot de l'Olympique de Marseille",
        prix: 90 ,
        description: "Maillot de l'Olympique de Marseille, saison 2022/2023.",
        image: "https://contents.mediadecathlon.com/p2331098/k$23ae6548bb5d192afb5d5c94839ade86/sq/8763176.jpg?format=auto&f=800x0"
    },
    {
        nom: "Maillot du Paris-Saint-Germain",
        prix: 100,
        description: "Maillot du Paris-Saint-Germain, saison 2022/2023.",
        image: "https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-home-stadium-shirt-2022-23_ss4_p-13303204+pv-1+u-sk3ly93bp2lofzgo6aqu+v-385f664784d2401b8cc827f5f3afe379.jpg?_hv=2&w=900"
    },
    {
        nom: "Crampons Nike",
        prix: 145,
        description: "Crampons Nike Mercurial moulés",
        image: "https://www.mercurialrabais.com/9410-large_default/nike-mercurial-superfly-8-elite-fg-crampons-blanc-multicolore.jpg"
    },
    {
        nom: "Maillot de l'Equipe de France",
        prix: 110 ,
        description: "Maillot de l'équipe de France, édition Coupe du Monde",
        image: "https://www.made-in-football.com/14136-tm_thickbox_default/maillot-france-domicile-mbappe-2022-2023.jpg"
    },
    {
        nom: "Protège-tibias Adidas",
        prix: 15,
        description: "Protège-tibias Adidas",
        image: "https://contents.mediadecathlon.com/p2071104/k$4d7c830decf3b890adf7de594bdf8ac3/sq/protege-tibias-adidas-tiro-club-noirs.jpg?format=auto&f=800x0"
    },
    {
        nom: "Plot d'entrainement",
        prix: 8,
        description: "Protège-tibias Adidas",
        image: "https://media.decapro.com/Medium/_2/01/_20191011110704-medium..jpg"
    },
    {
        nom: "Sac de sport PUMA",
        prix: 25,
        description: "Protège-tibias Adidas",
        image: "https://www.cdiscount.com/pdt2/9/5/4/1/700x700/pum4060981725954/rw/puma-sac-de-sport-challenger-taille-s-noir.jpg"
    },

]

function genererProduits(produits) {
    

        for (let produit of produits) {

        const sectionDiv = document.querySelector(".produits");

        const articleDiv = document.createElement("div")

        const produitImage = document.createElement("img");
        produitImage.src = produit.image;

        const produitNom = document.createElement("h2");
        produitNom.innerText = produit.nom;

        const produitPrix = document.createElement("p");
        produitPrix.innerText = produit.prix;

        sectionDiv.appendChild(articleDiv);
        articleDiv.appendChild(produitImage);
        articleDiv.appendChild(produitNom);
        articleDiv.appendChild(produitPrix);
        }
    }

genererProduits(produits);


const boutonTriOrdre = document.querySelector(".btn-tri-ordre");

boutonTriOrdre.addEventListener("click",function () {
    const articleOrdre = Array.from(produits);
    articleOrdre.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".produits").innerHTML = "";
    genererProduits(articleOrdre);
    
});

const boutonTriDesordre = document.querySelector(".btn-tri-desordre");

boutonTriDesordre.addEventListener("click", function () {
    const articleDesordre = Array.from(produits);
    articleDesordre.sort(function(a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".produits").innerHTML = "";
    genererProduits(articleDesordre);
});

const boutonFiltre = document.querySelector(".btn-filtre");

boutonFiltre.addEventListener("click", function() {
    const articleMaillot = produits.filter(function (produits) {
        return produits.prix <= 50;
    });
    document.querySelector(".produits").innerHTML = "";
    genererProduits(articleMaillot);
});
