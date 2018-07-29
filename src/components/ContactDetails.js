import React, { Component } from "react"

class ContactDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDetails: false
        }       
    }

    moreDetails = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
          }));
    }

    render() {
        const { showDetails } = this.state
        const { VORNAME, LIEFERANT, EMAIL, TELEFON, LIEFERANT_HOMEPAGE } = this.props.contact 
 
        return (
            <div className="bb b--black-05">
                <article className="dt w-100 pb2 mt2" href="#">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.cc/photos/p/2.jpg" alt="" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                    </div>
                    <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">{VORNAME}</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">{LIEFERANT ? `${LIEFERANT}` : 'Not Found GmbH'} </h2>
                    </div>
                
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" 
                                onClick={this.moreDetails}> {showDetails ? 'Hide Details' : 'More Details'}
                            </button>
                        </form>
                    </div>
                </article>
                {   showDetails &&
                    <article data-name="slab-stat-small">
                        <div className="cf">
                            { EMAIL &&    
                                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                                    <dd className="f6 fw4 ml0">Email</dd>
                                    <dd>
                                        <a href={`mailto:${EMAIL}`}
                                            class="f6 link blue hover-dark-gray">{EMAIL}
                                        </a>
                                    </dd>
                                </dl>   
                            }

                            { TELEFON &&
                                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                                    <dd className="f6 fw4 ml0">Tel</dd>
                                    <dd>
                                        <a href={`tel:${TELEFON}`} 
                                            class="f6 link blue hover-dark-gray">{TELEFON}
                                        </a>
                                    </dd>
                                </dl>
                            }

                            { LIEFERANT_HOMEPAGE &&
                                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                                    <dd className="f6 fw4 ml0">Home Page</dd>
                                    <dd>
                                        <a href={`${LIEFERANT_HOMEPAGE}`} 
                                            target='blank' 
                                            class="f6 link blue hover-dark-gray">{LIEFERANT_HOMEPAGE}
                                        </a>
                                    </dd>
                                </dl>
                            }
                        </div>
                    </article>
                }
            </div>
        )
    }
}

export default ContactDetails
