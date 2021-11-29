//cordenador de rotas da aplicação

export const goToHome = (history) => {
    history.push ("/")
}

export const goToSearch = (history) => {
    history.push ("/search")
}

export const goToDetail = (history, id) => {
    history.push (`/detail/${id}`)
}

export const goToTendencies = (history) => {
    history.push ("/tendencies")
}
