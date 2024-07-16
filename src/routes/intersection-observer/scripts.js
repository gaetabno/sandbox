export let IntersectionObserverFunc = () => {
    // 1. Definisci la funzione di callback
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // L'elemento è visibile
                // console.log('Elemento visibile:', entry.target);
                // Esegui qualche azione, ad esempio carica un'immagine
                // entry.target.src = entry.target.dataset.src;

                // Aggiungi classe watch
                entry.target.classList.add('watch')
                // Smetti di osservare se non serve più
                observer.unobserve(entry.target);
            }  
        });
    };

    // 2. Crea un'istanza di IntersectionObserver
    const options = {
        root: null, // Il viewport del browser
        rootMargin: '0px', // Margini aggiuntivi intorno al root
        threshold: 0.6 // Percentuale di visibilità necessaria per attivare il callback
    };

    const observer = new IntersectionObserver(callback, options);

    // 3. Seleziona e osserva gli elementi target
    document.querySelectorAll('.js-trigger').forEach(trigger => {
        observer.observe(trigger);
    });

}