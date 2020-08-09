class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.position,
            cupPosition: props.cupPosition,
            teamName: props.teamName,
            driverName: props.driverName,
            laps: props.laps,
            gap: props.gap
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.position} --- {this.state.teamName}</h1>
            </div>
        );
    }
}