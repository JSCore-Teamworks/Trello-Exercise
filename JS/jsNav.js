function test (){
    console.log("in")

    let navBarContainer = document.createElement('span')


    let home = document.createElement('span')
    let logo = document.createElement('IMG')
    logo.setAttribute('src','imgs/logo.jpeg')

    home.appendChild(logo)

    let restOfTheLinks = document.createElement('span')




    let careers = document.createElement('span')
    careers.innerHTML='Careers'
    careers.addEventListener('click',()=>{
        window.location.href = 'careers.html'
    })

    let contacts = document.createElement('span')
    contacts.innerHTML='Contacts'
    contacts.addEventListener('click',()=>{
        window.location.href = 'contacts.html'
    })

    let portfolio = document.createElement('span')
    portfolio.innerHTML='Portfolio'
    portfolio.addEventListener('click',()=>{
        window.location.href = 'portfolio.html'
    })

    let service = document.createElement('span')
    service.innerHTML='Services'
    service.addEventListener('click',()=>{
        window.location.href = 'services.html'
    })
    let about = document.createElement('span')
    about.innerHTML='About'
    about.addEventListener('click',()=>{
        window.location.href = 'about.html'
    })
     let index = document.createElement('span')
    index.innerHTML='Home'
    index.addEventListener('click',()=>{
        window.location.href = 'index.html'
    })


    restOfTheLinks.appendChild(index);
    restOfTheLinks.appendChild(about);
    restOfTheLinks.appendChild(careers)
    restOfTheLinks.appendChild(contacts)
    restOfTheLinks.appendChild(portfolio)
    restOfTheLinks.appendChild(service)

    navBarContainer.appendChild(home)
    navBarContainer.appendChild(restOfTheLinks)

    document.getElementById('nav-bar').appendChild(navBarContainer)


}