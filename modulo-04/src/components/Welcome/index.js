import React from 'react'

class ComponenteClasse extends React.Component {
    name = ""
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return <h1 onClick={() => {
            this.name = 'Jadson'
            console.log(this)
        }}>Componente de {this.name}</h1>
    }
}

export default ComponenteClasse