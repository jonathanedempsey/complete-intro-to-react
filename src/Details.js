import { Component } from "react";
import { withRouter } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

class Details extends Component {
    state = { loading: true, showModal: false };

    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal })

    // Here we would let the shelter know the pet has been adopted,
    // instead just redirect to a pet adoption site
    adopt = () => (window.location = 'http://bit.ly/pet-adopt');

    render () {
        // console.log(this.state);

        // throw new Error("broke");

        if(this.state.loading) {
            return <h2>loading</h2>;
        }

        const { animal, breed, city, state, description, name, images, showModal } = this.state;

        return (
            <div className="details">
                <Carousel images={images} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        // if showModal is true, render our modal.
                        // else, do nothing
                        showModal ? (
                            <Modal>
                                <div>
                                    <h2>Would you like to adopt {name}?</h2>
                                    <ThemeContext.Consumer>
                                        {([theme]) => (
                                            <div className="buttons">
                                                <button onClick={this.adopt} style={{ backgroundColor: theme }}>Yes</button>
                                                <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>No</button>
                                            </div>
                                        )}
                                    </ThemeContext.Consumer>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter />
        </ErrorBoundary>
    )
};