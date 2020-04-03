function render_status()
{
    active = document.createElement('h3')
    active.textContent = "Preview Plugin is active"
    active.setAttribute('id', 'pvp_active')
    active.style.position = "fixed"
    active.style.top = "150px"
    active.style.right = "50px"
    active.style.color = "white"
    active.style.background = "#3E4451"
    active.style.padding = "5px 10px"
    document.getElementsByTagName('body')[0].appendChild(active)

    document.getElementsByTagName('html')[0].style.overflowX = "hidden"
}

function render_previews()
{
    child_links = document.getElementsByClassName('LC20lb')

    for(var i = 0; i < child_links.length; i++)
    {
        div = document.createElement('div')
        div.style.width = 600 + 'px'
        div.style.height = 600 + 'px'
        div.style.display = "none"
        div.style.overflow = "scroll"

        loader_div = document.createElement('div')
        loader_div.style.display = "flex"
        loader_div.style.width = "100%"
        loader_div.style.height = "100%"
        loader_div.style.alignItems = "center"
        loader_div.style.justifyContent = "center"
        loader_div.innerHTML = "<div class='spinner-border text-primary' style='width: 5rem; height: 5rem;' role='status'><span class='sr-only'>Loading...</span></div>"

        div.appendChild(loader_div)
    
        img = document.createElement('img')
        img.src = "http://45.143.139.30/api?url=" + child_links[i].parentElement.href
        img.onload = function(){
            this.parentElement.firstChild.remove()
        }

        div.appendChild(img)
        
        child_links[i].append(div)
    
        child_links[i].onmouseover = function()
        { 
            this.lastChild.style.display = "block"
        }
        child_links[i].onmouseout = function()
        {
            this.lastChild.style.display = "none"
        }
    
    }
    
}

if(document.getElementById('pvp_active') == null)
{
    render_status()
    render_previews()
}
else
{
    document.getElementById('pvp_active').remove()
    for(var i = 0; i < child_links.length; i++)
    {
        child_links[i].lastChild.remove()
        child_links[i].onmouseover = null
        child_links[i].onmouseout = null
    }
}
