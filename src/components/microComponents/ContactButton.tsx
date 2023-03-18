

export function ContactButton() {

    function handleCopy() {
        navigator.clipboard.writeText('victoryahagui@gmail.com');
        alert('Meu email foi copiado para seu clipboard =)')
    }
    return (
        <button onClick={() => handleCopy()} className='btn btn-lg'>Contato</button>
    )
}