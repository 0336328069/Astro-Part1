export default (load, opts, el) => {
    el.addEventListener('mouseover', async () => {
        const hydrate = await load()
        await hydrate()
    }, { once: true })
}