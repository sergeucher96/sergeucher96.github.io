
const loadData = async () => {
  const fetchRequest = await fetch('./siteData.json')
  
  return await fetchRequest.json()
}

const getServiceName = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const name = searchParams.get('name')
  if (!name) {
    throw new Error('Unknown service name')
  }

  return name
}

const renderText = (text) => {
  const textContainer = document.getElementById('about-text')
  textContainer.innerHTML = text
}

const renderLink = (link) => {
  const linkContainer = document.getElementById('service-link')
  linkContainer.href = link
}

const main = async () => {
  const data = await loadData()
  const serviceName = getServiceName()

  const serviceData = data[serviceName]
  if (!serviceData) {
    throw new Error('This name dont exist in site data')
  }
  const { text, link } = serviceData

  if (text) renderText(text)
  if (link) renderLink(link)

  console.log(serviceData)
}

main()
