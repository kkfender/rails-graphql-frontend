const style = {
    height: '50px',
    backgroundColor: 'lightgrey',
}
export const Child2 = () => {
    console.log('Child2レンダリング')
    return (
        <div style={style}>
            <p>Child2</p>
        </div>
    )
}