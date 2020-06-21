import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBIcon, MDBAnimation,div,} from "mdbreact";


 class Recommendation extends Component {
     constructor(props){
         super(props)
         this.state= {
             imageClicked:false
         }
     }
    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                      
                    <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            recommendation
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-md-0 mb-5">
              <div>
               
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Web Designer
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
               
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <div>
               
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
               
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  John Doe
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Web Developer
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
               
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div >
              
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                    alt=""
                    className={this.state.imageClicked?"rounded-circle z-depth-1 img-fluid recom-effect":"rounded-circle z-depth-1 img-fluid"}
                    // style={this.state.imageClicked?{transform:'scale(1.1)'}:{}}
                    onClick={()=>{this.setState({imageClicked:!this.state.imageClicked})}}
                  />
             
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Maria Kate
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Photographer
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                
              </div>
            </MDBCol>
          </MDBRow>
        </section>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}
export default Recommendation
