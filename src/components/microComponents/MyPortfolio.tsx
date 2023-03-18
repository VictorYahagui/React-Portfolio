type MyPortfolioProps = {
    content: string
}

export function MyPortfolio(props: MyPortfolioProps) {
    return (
        <a href="https://victoryahagui.github.io" target='_blank' className='text-gradient btn-link'>{props.content}</a>
    )
}