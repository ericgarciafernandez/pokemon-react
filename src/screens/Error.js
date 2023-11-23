const Error = ({errorMsg}) => {
    return (
        <div>
            {errorMsg ? `El error es: ${errorMsg}` : null}
        </div>
    )
}

export default Error