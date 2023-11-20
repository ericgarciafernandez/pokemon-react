const Error = (props) => {
    const { errorMsg } = props;
    return (
        <div>
            {errorMsg ? `El error es: ${errorMsg}` : null}
        </div>
    )
}

export default Error