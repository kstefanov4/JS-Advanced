function getArticleGenerator(articles) {
    let currentArticles = Array.from(articles);

    return () => {
        if (currentArticles.length === 0) {
            return
        }

        let article = currentArticles.shift();
        document.getElementById('content').innerHTML += `<article>${article}</article>`
    }
}
