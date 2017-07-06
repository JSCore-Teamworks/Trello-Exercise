function test (){
    console.log("in")

    let navBarContainer = document.createElement('DIV')


    let home = document.createElement('DIV')
    let logo = document.createElement('IMG')
    logo.setAttribute('src','imgs/logo.jpeg')

    home.appendChild(logo)

    let restOfTheLinks = document.createElement('DIV')


    let careers = document.createElement('DIV')
    careers.innerHTML='Careers'
    careers.addEventListener('click',()=>{
        window.location.href = '/careers.html'
    })

    let contacts = document.createElement('DIV')
    contacts.innerHTML='Contacts'
    contacts.addEventListener('click',()=>{
        window.location.href = '/contacts.html'
    })

    let portfolio = document.createElement('DIV')
    portfolio.innerHTML='Portfolio'
    portfolio.addEventListener('click',()=>{
        window.location.href = '/portfolio.html'
    })

    let service = document.createElement('DIV')
    service.innerHTML='Services'
    service.addEventListener('click',()=>{
        window.location.href = '/services.html'
    })

    restOfTheLinks.appendChild(careers)
    restOfTheLinks.appendChild(contacts)
    restOfTheLinks.appendChild(portfolio)
    restOfTheLinks.appendChild(service)

    navBarContainer.appendChild(home)
    navBarContainer.appendChild(restOfTheLinks)

    document.getElementById('nav-bar').appendChild(navBarContainer)


}