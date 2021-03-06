//Fonction globale de la page permettant de lancer toutes les fonctions de celle-ci
(async function () {

    displayBasket()

    displayForm()
})()

//Fonction permettant d'afficher tous les éléments de la page basket
function displayBasket() {
    //Si le panier est vide (inférieur à 1 article)
    if (basketContent.length < 1) {
        console.log("Le panier est vide")
        //Permet de cacher la section "basketIsFilled étant donné que le panier est vide"
        const filledBasket = document.getElementById("basketIsFilled")
        filledBasket.classList.add("d-none")
    }
    //Si le panier contient des produits (égal ou supérieur à 1 article)
    else {
        console.log("Le panier n'est pas vide")
        //Permet de cacher la section "basketIsEmpty" étant donné que le panier contient des articles
        const emptyBasket = document.getElementById("basketIsEmpty")
        emptyBasket.classList.add("d-none")

        //Afficher le contenu du panier 
        let arrayBasketStructure = []; //Déclarer la structure de l'affichage du panier avec un [array]
        const productsInBasket = document.getElementById("productsInBasket") //Déclarer où le panier sera envoyé dans le html

        //Boucle for itérant sur la length de basketContent, permettant d'aller chercher les éléments du panier 1 à 1 et d'y *
        //ajouter les éléments du basketContent dynamiquement
        for (j = 0; j < basketContent.length; j++) {
            arrayBasketStructure = arrayBasketStructure + `
            <div class="d-flex justify-content-between p-1 rounded" >
                <img class="rounded d-block d-md-none" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo ${basketContent[j].name}" width="100" height="100">
                <img class="rounded d-none d-md-block" id="product__img" src="${basketContent[j].img}" alt="Modèle appareil photo ${basketContent[j].name}" width="200">
            <div class="d-flex flex-column align-items-center">
                <h6 class="d-block d-md-none" id="product__name">${basketContent[j].name}</h6>
                <h5 class="d-none d-md-block" id="product__name">${basketContent[j].name}</h5>
                <p id="product__option">${basketContent[j].option}</p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn remove1FromBasket" type="button" aria-hidden="true" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " fill="red" class="bi bi-x-circle" viewBox="0 0 16 16" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-id="${basketContent[j].id}" data-deduct="${j}" data-option="${basketContent[j].option}"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>

                <input class="cart-quantity-input quantity d-none" type="number" id="product__quantity" name="quantity" value="${basketContent[j].quantity}">

                <button class="btn add1ToBasket" type="button" aria-hidden="true" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18 " fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" data-id="${basketContent[j].id}" data-add="${j}" data-option="${basketContent[j].option}"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
                
                <span class="pt-2" id="product__quantity">${basketContent[j].quantity}</span>
                
            </div>
            <div class="d-flex flex-row align-items-center">
                <p class="pt-3 d-block d-md-none" id="product__price">${showPrices(basketContent[j].price)}</p>
                <p class="pt-3 d-none d-md-block"><strong id="product__price">${showPrices(basketContent[j].price)}</strong></p>
            </div>
            <div class="d-flex flex-row align-items-center">
                <button class="btn removeProductFromBasket" type="button" aria-hidden="true" data-remove="${j}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" fill="red" class="bi bi-trash" viewBox="0 0 16 16" data-remove="${j}">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" data-remove="${j}"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </div>
            <div class="d-flex flex-column align-items-center pt-4">
                <h6>Sous-Total</h6>
                <p>${showPrices(basketContent[j].quantity * basketContent[j].price)}</p>
            </div>
            </div>`;
        }
        //Envoie du panier dans le html
        productsInBasket.innerHTML = arrayBasketStructure;
    }


    /*Boutons add, deduct, remove et clear
     */

    //Bouton deduct 1

    //Relie le bouton du html à sa const. Utilisation d'une class et non d'un id pour ce bouton car il y en plusieurs sur la page *
    //(1 par article). Si un id est appelé, seul le premier sera appelé étant donné qu'un id est unique
    let deductBtnArr = document.getElementsByClassName('remove1FromBasket');
    console.log('deduct btn here: ', deductBtnArr);

    //Boucle for permettant d'itérer sur tous les boutons deductBtnArr de la page 
    for (let deductBtn of deductBtnArr) {
        //addEventListener sur le click de ce bouton 
        deductBtn.onclick = (event) => {
            event.preventDefault();
            console.log("1", event.target);
            console.log("2", event.target.parentElement);

            //Déclare la "key", c'est à dire la déclaration de la place du produit dans le array basketContent (le 1er produit est à 0, puis 1 etc. Important pour cibler)
            let key = event.target.parentElement.dataset.deduct;
            console.log("key", key);

            //Déclare l'"id", qui est rattaché au produit afin de l'utiliser plus loin
            let id = event.target.parentElement.dataset.id;
            console.log("id", id);

            //Déclare l'"option", qui est rattachée au produit afin de l'utiliser plus loin
            let option = event.target.parentElement.dataset.option;
            console.log("option", option)

            //Déclare la const servant à selectionner tous les buttons de la page contenant "data-remove", ce qui revient à sélectionner tous les buttons *
            //remove1FromBasket
            let deductBtns = document.querySelectorAll('button[data-deduct]');
            console.log("deductBtns", deductBtns)
            //Boucle itérant sur chaque bouton remove1FromBasket
            deductBtns.forEach(deductBtn => {
                console.log("deductBtn", deductBtn);
                console.log("deductBtn.dataset", deductBtn.dataset.deduct);
                //If vérifiant si la key dataset du bouton et la key de celui-ci sont les mêmes afin de s'assurer de cibler le bon produit dans le array
                if (deductBtn.dataset.deduct == key) {
                    //déclare la variable currentInputBox pour la rattacher à l'input voisin de deductBtn
                    let currentInputBox = deductBtn.nextElementSibling;
                    console.log("currentInputBox value is :" + currentInputBox.value);

                    //Condition if : si la valeur de la quantité du produit est supérieur à 1, la quantité peut être décrémentée d'une unité, *
                    //sinon rien ne se passe
                    if (currentInputBox.value > 1) {
                        //Lors de l'appui sur le bouton, réduit la valeur de currentInputBox de 1
                        currentInputBox.value = currentInputBox.value - 1;
                        // Va envoyer le produit dans le localStorage
                        for (basket of basketContent) {
                            if (basket.id === id && basket.option === option) {
                                basket.quantity = currentInputBox.value;
                                localStorage.setItem("produit", JSON.stringify(basketContent))
                                location.reload();
                            }
                        }
                    } //Fin du if (currentInputBox.value > 1)
                    //Else : la quantité du produit n'est pas supérieur à 1
                    else {
                        console.log("la quantité du produit n'est pas supérieur à 1, suppression du produit")
                        //Utilisation de .splice sur le [basketContent] : permet de supprimer ou d'ajouter des items dans le [array] *
                        //Ici on supprime un item : 
                        //Avec la valeur de key qui correspond à la place du produit visé dans [basketContent], on va cibler cet indice du [array] et *
                        //demander à supprimer 1 élément, celui en question
                        basketContent.splice(key, 1)
                        //On renvoie le nouveau [basketContent] dans le localStorage
                        localStorage.setItem("produit", JSON.stringify(basketContent))
                        //Recharge la page
                        location.reload();
                    } //Fin du else
                } //Fin du if(deductBtn.dataset.deduct == key)
            })
            console.log("deductBtns", deductBtns);
        }
    }



    //Bouton add 1

    //Relie le bouton du html à sa const. Utilisation d'une class et non d'un id pour ce bouton car il y en plusieurs sur la page *
    //(1 par article). Si un id est appelé, seul le premier sera appelé étant donné qu'un id est unique
    let addBtnArr = document.getElementsByClassName('add1ToBasket');
    console.log('add btn here: ', addBtnArr);

    //Boucle for permettant d'itérer sur tous les boutons addBtnArr de la page 
    for (let addBtn of addBtnArr) {
        //addEventListener sur le click de ce bouton 
        addBtn.onclick = (event) => {
            event.preventDefault();
            console.log("1", event.target);
            console.log("2", event.target.parentElement);

            //Déclare la "key", c'est à dire la déclaration de la place du produit dans le array basketContent (le 1er produit est à 0, puis 1 etc. Important pour cibler)
            let key = event.target.parentElement.dataset.add;
            console.log("key", key);

            //Déclare l'"id", qui est rattaché au produit afin de l'utiliser plus loin
            let id = event.target.parentElement.dataset.id;
            console.log("id", id);
            //Déclare l'"option", qui est rattachée au produit afin de l'utiliser plus loin
            let option = event.target.parentElement.dataset.option;
            console.log("option", option)

            //Déclare la const servant à selectionner tous les buttons de la page contenant "data-add", ce qui revient à sélectionner tous les buttons 
            //add1ToBasket
            let addBtns = document.querySelectorAll('button[data-add]');
            console.log("addBtns", addBtns)
            //Boucle itérant sur chaque bouton add1ToBasket
            addBtns.forEach(addBtn => {
                console.log("addBtn", addBtn);
                console.log("addBtn.dataset", addBtn.dataset.add);
                //If vérifiant si la key dataset du bouton et la key de celui-ci sont les mêmes afin de s'assurer de cibler le bon produit dans le array
                if (addBtn.dataset.add == key) {
                    console.log("IN HERE");
                    //déclare la variable currentInputBox pour la rattacher à l'input voisin de addBtn
                    let currentInputBox = addBtn.previousElementSibling;
                    console.log("currentInputBox value is :" + currentInputBox.value);
                    //Lors de l'appui sur le bouton, augmente la valeur de currentInputBox de 1
                    currentInputBox.value = ++currentInputBox.value;
                    // Va envoyer le produit dans le localStorage
                    for (basket of basketContent) {
                        if (basket.id === id && basket.option === option) {
                            basket.quantity = currentInputBox.value;
                            localStorage.setItem("produit", JSON.stringify(basketContent))
                            location.reload();
                        } //Fin du if (basket.id === id && basket.option === option)
                    }
                } //Fin du if (addBtn.dataset.add == key)
            })
            console.log("addBtns", addBtns);
        }
    }


    //Bouton deleteItem
    const btnRemoveProductFromBasketArr = document.getElementsByClassName("removeProductFromBasket")
    //Boucle for itérant sur tous les boutons "removeProductFromBasket" du html 
    for (let btnRemoveProductFromBasket of btnRemoveProductFromBasketArr) {
        //addEventListener sur le click de ce bouton 
        btnRemoveProductFromBasket.onclick = (event) => {
            //Appel la fonction remove1FromBasket(), déclarée dans le fichier fonctions.js
            removeItemFromBasket()
        }
    }



    //Bouton "clear"
    //Relie le bouton du html à sa const
    const buttonClearBasket = document.getElementById("clearBasket")
    //Ajout d'un addEventListener lors du click sur le bouton, appelle la fonction permettant de vider le localStorage et *
    //recharge la page
    buttonClearBasket.addEventListener("click", () => {
        //Appel de la fonction clearBasket(), déclarée dans le fichier fonctions.js
        clearBasket()
    })


    //Affichage du totalPrice
    //Appel de la fonction calculateTotalPrice(), déclarée dans le fichier fonctions.js
    calculateTotalPrice()

} //Fin de la fonction displayBasket


//Fonction displayForm(), qui va gérer tout ce qui est lié à l'affichage du formulaire sur la page basket
function displayForm() {
    //Fonction permettant d'injecter le formulaire dans le html
    function injectForm() {
        //Relie le html au javascript
        const formBasket = document.getElementById("formBasket")

        //Ajoute le html
        formBasket.innerHTML = `
        <div class="container my-5">
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="firstName">Prénom</label>
                    <input type="name" class="form-control" id="firstName" placeholder="Jean">
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">Nom</label>
                    <input type="name" class="form-control" id="lastName" placeholder="Valjean">
                </div>
            </div>
                <div class="form-group">
                    <label for="email">Adresse Mail</label>
                    <input type="" class="form-control" id="email" placeholder="jean.valjean@les-miserables.com">
                    <small class="form-text text-muted" id="emailHelp">Nous ne partagerons jamais votre adresse mail avec Jafer</small>
                </div>
                <div class="form-group">
                    <label for="adress">Adresse</label>
                    <input type="" class="form-control" id="adress" placeholder="1862 place des Thénardiers">
                </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="city">Ville</label>
                    <input type="" class="form-control" id="city" placeholder="Paris">
                </div>
                <div class="form-group col-md-4">
                    <label for="country">Pays</label>
                    <input type="" class="form-control" id="country" placeholder="France">
                </div>
                <div class="form-group col-md-4">
                    <label for="zipcode">Code Postal</label>
                    <input type="" class="form-control" id="zipcode" placeholder="75000">
                </div>
            </div>
        </form>
        </div>
        `
    } //Fin de la function injectForm()

    //Bouton validateBasket
    //Relie le bouton du html au javascript
    const btnValidateBasket = document.getElementById("validateBasket")
    const btnValidateCommand = document.getElementById("validateCommand")
    console.log("btnValidateCommand", btnValidateCommand)

    //Ajoute un addEventListener sur le click du bouton
    btnValidateBasket.addEventListener("click", (event) => {
        event.preventDefault;
        //Appelle la function injectForm() pour afficher le formulaire
        injectForm()
        //Fait disparaître le button btnValidateBasket après le click
        btnValidateBasket.classList.add("d-none")
        //Fait apparaître le button btnValidateCommand après le click
        btnValidateCommand.classList.remove("d-none")

        //Relie le lien backToProducts du html au javascript
        const backToProducts = document.getElementById("backToProducts")
        //Fais disparaître le lien backToProducts lors du click sur le bouton, donc lors de l'affichage du formulaire
        backToProducts.classList.add("d-none");
    }) //Fin du addEventListener de btnValidateBasket


    /*
    REGEX
    */

    //Déclaration des différentes REGEX pour vérifier que les champs du formulaire sont remplis correctement

    //Fonction déclarant la regex name pour vérifier le format du prénom
    function checkFirstName() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const firstName = document.getElementById("firstName")
        //Regex pour les noms propres : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 50 caractères *
        //Ici on crée un nouvel objet RegExp, une des 2 méthodes d'écriture de Regex possible. Strictement équivalente à la regex de lastName
        var regexName = new RegExp("^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$", "g");
        //
        //Le if va vérifier que la regex (regexName) est respectée sur la valeur de l'input visé (firstName) avec la méthode test
        if (regexName.test(firstName.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le prénom est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du prénom !")
        }
    }

    //Fonction déclarant la regex name pour vérifier le format du nom
    function checkLastName() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const lastName = document.getElementById("lastName")
        //Regex pour les noms propres : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 35 caractères *
        //Ici on déclare directement la régex, une des 2 méthodes d'écriture de Regex possible. Strictement équivalente à la regex de firstName
        var regexName = /^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$/g
        //Le if va vérifier que la regex (regexName) est respectée sur la valeur de l'input visé (lastName) avec la méthode test
        if (regexName.test(lastName.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le nom est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du nom !")
        }
    }

    //Fonction déclarant la regex Mail pour vérifier le format de l'email
    function checkEmail() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const email = document.getElementById("email")
        //Regex pour les emails : ici elle autorise les caractères de a à z en majuscule et minuscule, les chiffres de 0 à 9. *
        //Il est obligatoire de mettre au moins un caractère alphanumérique en début de mail, plus loin un @ est obligatoire, suivi d'au moins 1 caractère *
        //alphanumérique, puis un point est obligatoire, suivi d'au moins 2 caractères a à Z 
        var regexMail = new RegExp("^[a-zA-Z0-9\-_]{1,}[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]{1,}.[a-zA-Z]{2,}", "gi")

        //Le if va vérifier que la regex (regexMail) est respectée sur la valeur de l'input visé (email) avec la méthode test
        if (regexMail.test(email.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("L'email est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du mail !")
        }
    }

    //Fonction déclarant la regex Adress pour vérifier le format de l'adresse
    function checkAdress() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const adress = document.getElementById("adress")
        //Regex pour les adresses : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, les chiffres de 0 à 9, et de 4 à 50 caractères *
        //Un caractère alphanumérique est obligatoire en début d'adresse, ensuite les nombres ou mots doivent être séparés par 1 seul espace *
        //Des caractères comme . ' - / sont autorisés.
        var regexAdress = new RegExp("^([a-zA-ZÜ-ü0-9]+( [a-zA-ZÜ-ü0-9_\.\'\-\/]+)*){4,50}$", "g")

        //        
        //Le if va vérifier que la regex (regexAdress) est respectée sur la valeur de l'input visé (adress) avec la méthode test
        if (regexAdress.test(adress.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("L'adresse est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format de l'adresse !")
        }

    }

    //Fonction déclarant la regex City pour vérifier le format de la ville
    function checkCity() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const city = document.getElementById("city")
        //Regex pour les villes : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 35 caractères *
        var regexCity = new RegExp("^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$", "g")
        //Le if va vérifier que la regex (regexCity) est respectée sur la valeur de l'input visé (city) avec la méthode test
        if (regexCity.test(city.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("La ville est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format de la ville !")
        }
    }

    //Fonction déclarant la regex Country pour vérifier le format du pays
    function checkCountry() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const country = document.getElementById("country")
        //Regex pour les pays : ici elle autorise les lettres de a à z en majuscule et en minuscule, les caractères avec accents comme é ou à, et de 2 à 35 caractères *
        var regexCountry = new RegExp("^(([a-zA-ZÜ-ü]+[\ \'\-]{1}[a-zA-ZÜ-ü]+)|([a-zA-ZÜ-ü]+)){2,50}$", "g")
        //Le if va vérifier que la regex (regexCountry) est respectée sur la valeur de l'input visé (country) avec la méthode test
        if (regexCountry.test(country.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le pays est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du pays !")
        }
    }

    //Fonction déclarant la regex Zipcode pour vérifier le format du code postal
    function checkZipcode() {
        //Rattache l'élément du html au javascript(l'input du formulaire à vérifier)
        const zipcode = document.getElementById("zipcode")
        //Regex pour les codes postaux : Autorise seulement 5 chiffres de 0 à 9
        var regexZipcode = new RegExp("^([0-9]){5}$", "g");

        //Le if va vérifier que la regex (regexZipcode) est respectée sur la valeur de l'input visé (zipcode) avec la méthode test
        if (regexZipcode.test(zipcode.value)) {
            //Si la value respecte la regex, affiche ceci dans le console log, et renvoie true
            console.log("Le code postal est valide")
            return true;
        } else {
            //Si la value ne respecte pas la regex, affiche ceci dans le console log et ne renvoie rien
            console.log("Erreur dans le format du code postal !")
        }
    }

    //Déclaration du [products], afin de l'envoyer à l'API
    const products = [];
    //Va chercher dans le [basketContent] pour chaque produit leur id, afin de les ajouter au [products]
    basketContent.forEach(produit => {
        products.push(produit.id)
    });
    console.log("products", products)

    //addEventListener sur le click du button btnValidateCommand, qui va appeler les fonctions de regex pour le formulaire
    btnValidateCommand.addEventListener("click", (event) => {
        event.preventDefault;

        checkFirstName();
        checkLastName();
        checkEmail();
        checkAdress();
        checkCity();
        checkCountry();
        checkZipcode();

        //Va vérifier si toutes les fonctions citées renvoient "true"
        if (checkFirstName() && checkLastName() && checkEmail() && checkAdress() && checkCity() && checkCountry() && checkZipcode()) {
            console.log("Tous les champs du formulaire sont bien remplis !")
            //Création de l'objet "contact", contenant toutes les informations utiles à la commande
            let contact = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                address: document.getElementById("adress").value,
                city: document.getElementById("city").value,
                email: document.getElementById("email").value,
                country: document.getElementById("country").value,
                zipcode: document.getElementById("zipcode").value,
            }
            console.log("contact", contact);
            //Fonction pour envoyer la commande. Fait une requête POST sur l'API (URL + /order) en envoyant les objets contact et products au format souhaité par l'API
            function sendOrder() {
                //Fetch sur la même URL d'API que pour les produits, en rajoutant /order
                fetch("http://localhost:3000/api/cameras/order", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        //Contenu de la requête fetch, contenant les objets contact et products créés plus haut
                        body: JSON.stringify({
                            contact,
                            products
                        })

                    })
                    //Si la réponse est ok, la return au format json
                    .then(function (responce) {
                        if (responce.ok) {
                            return responce.json();
                        }
                    })
                    .then(response => {

                        //Va chercher l'id renvoyé par l'API, qui correspond au numéro de commande
                        let orderId = response.orderId;
                        //Va chercher le prix total dans la page html
                        let totalPrice = document.getElementById("totalPrice").textContent;

                        //Création d'un objet contenant les données nécessaires à l'affichage de la page confirmOrder.html
                        let orderData = {
                            orderId,
                            totalPrice,
                            contact
                        };

                        console.log("orderData", orderData);

                        //Stocke cet objet dans le localStorage afin de pouvoir le réutiliser sur la page confirmation.html
                        localStorage.setItem("orderData", JSON.stringify(orderData));

                        window.location.href = "confirmation.html";
                    })
                    .catch(function (error) {
                        alert("error", error);
                    })
            }; //Fin de la fonction sendOrder()

            //Appel de la fonction sendOrder()
            sendOrder();
        } //Fin du if (checkFirstName() && checkLastName() && checkEmail() && checkAdress() && checkCity() && checkCountry() && checkZipcode()) 
        else {
            console.log("Une erreur s'est glissée dans le formulaire !")
        } //Fin du else
    }) //Fin du addEventListener sur le btnValidateCommand

} //Fin de la function displayForm()