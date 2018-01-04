'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Selectors
import { getUser } from '../UserReducer';

// Material
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  wizardStepPageStyle: {
    maxHeight: 350,
    minWidth:317
    // maxWidth: 679,
    // overflow:'auto',
  },
  termsSection:{
    maxHeight: 383,
    overflow:'auto',
    display:'inline-flex',
    width:'100%',
    flexDirection:'column'
  },
  toggle: {
    // marginBottom: 15,
    marginTop: 15,
    maxWidth:250,
    display:'inline-flex',
    width:'100%'
  }
};

class StepNumber3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen : false
    };

    //Binds
    this.stateChanged = this.stateChanged.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'3'});
  }

  isValidated() {
    console.log(this.state);
    if(!this.props.user.agreed_terms){
      this.handleOpen();
    }
    return this.props.user.agreed_terms;
  }

  stateChanged(value,isInputChecked){
    this.props.user.agreed_terms = isInputChecked;
    this.setState({user: this.props.user});
    console.log(this.state);
  }

  handleOpen = () => {
    this.setState({dialogOpen: true});
  };

  handleClose = () => {
    this.setState({dialogOpen: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="step step2" style={styles.wizardStepPageStyle}>
        <section style={styles.termsSection} >
          <h2>Privacy Policy</h2>
          <div className="col-md-12">
            <p><span>Last modified: January 3, 2018</span></p>
            <p><em><u><span>Introduction&nbsp; </span></u></em></p>
            <p><span>Insurights, Inc. &nbsp;(&ldquo;Company&rdquo; or &ldquo;We&rdquo;) respect your privacy and are committed to protecting it through our compliance with this policy.</span></p>
            <p><span>&nbsp;&nbsp;&nbsp; This policy describes the types of information we may collect from you or that you may provide when you visit the website (</span><a href="http://www.insurights.com"><span>www.insurights.com</span></a><span>) (our &ldquo;Website&rdquo;) and our practices for collecting, using, maintaining, protecting, and disclosing that information.</span></p>
            <p><span>&nbsp;&nbsp;&nbsp; This policy applies to information we collect on this website only. Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.</span></p>
            <p><em><u><span>Children Under the Age of 13&nbsp; </span></u></em></p>
            <p><span>&nbsp;&nbsp;&nbsp; Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. </span></p>
            <p><em><u><span>Information We Collect About You and How We Collect It&nbsp; </span></u></em></p>
            <p><span>&nbsp;&nbsp;&nbsp; We collect several types of information from and about users of our Website, including information: (i) by which you may be personally identified, such as name, postal address, e-mail address, telephone number or any other identifier by which you may be contacted online or offline (&ldquo;personal information&rdquo;); (ii) that is about you but individually does not identify you; and (iii) about your internet connection, the equipment you use to access our Website and usage details.</span></p>
            <p><span>&nbsp;&nbsp;&nbsp; We collect this information: (i) directly from you when you provide it to us, and (ii) automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.</span></p>
            <p><em><u><span>Information You Provide to Us</span></u></em><span>. </span></p>
            <p><span>The information we collect on or through our Website may include: (i) information that you provide by filling in forms on our Website, (ii) records and copies of your correspondence (including email addresses), if you contact us, and (iii) your search queries on the Website.</span></p>
            <p><em><u><span>Information We Collect Through Automatic Data Collection Technologies</span></u></em><span>. </span></p>
            <p><span>As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including: (i) details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website, (ii) information about your computer and internet connection, including your IP address, operating system, and browser type, (iii) the information we collect automatically is statistical data and does not include personal information. </span></p>
            <p><span>It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to: (i) estimate our audience size and usage patterns, (ii) store information about your preferences, allowing us to customize our Website according to your individual interests, (iii) speed up your searches, and (iv) recognize you when you return to our Website.</span></p>
            <p><span>The technologies we use for this automatic data collection may include:</span></p>
            <ul>
              <li><span> Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.</span></li>
              <li><span> Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. </span></li>
              <li><span> Web Beacons. Pages of our Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</span></li>
            </ul>
            <p><em><u><span>How We Use Your Information&nbsp; </span></u></em></p>
            <p><span>&nbsp;&nbsp;&nbsp; We use information that we collect about you or that you provide to us, including any personal information: (i) to present our Website and its contents to you, (ii) to provide you with information that you request from us, (iii) to fulfill any other purpose for which you provide it, (iv) to notify you about changes to our Website or any services we offer or provide though it, (v) in any other way we may describe when you provide the information, and (vi) for any other purpose with your consent.</span></p>
            <p><span>&nbsp;&nbsp;&nbsp; We may disclose personal information that we collect or you provide as described in this privacy policy: (i) to our subsidiaries and affiliates, (ii) to contractors, service providers, and other third parties we use to support our business, (iii) to a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company&rsquo;s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred, (iv) to fulfill the purpose for which you provide it, (v) for any other purpose disclosed by us when you provide the information, (vi) to comply with any court order, law, or legal process, including to respond to any government or regulatory request, and (vii) to enforce or apply our terms of use.</span></p>
            <p><em><u><span>Data Security&nbsp; </span></u></em></p>
            <p><span>&nbsp;&nbsp;&nbsp; We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. </span></p>
            <p><span>&nbsp;&nbsp;&nbsp; The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.</span></p>
            <p><span>&nbsp;&nbsp;&nbsp; Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.</span></p>
            <p><em><u><span>Changes to Our Privacy Policy&nbsp; </span></u></em></p>
            <p><span>&nbsp;&nbsp;&nbsp; It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users&rsquo; personal information, we will notify you by a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.</span></p>
            <p><span>&nbsp;</span></p>
            <p><span>&nbsp;</span></p>
          </div>
        </section>
        <div style={styles.block} className="col-md-12">
          <Toggle
            label="I agree"
            style={styles.toggle}
            onToggle={this.stateChanged}
            toggled={ this.props.user.agreed_terms}
          />
        </div>
        <Dialog
          title="Agree terms"
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >
          You must agree in order to see your results
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

StepNumber3.propTypes = {
  user: PropTypes.any
};

StepNumber3.contextTypes = {
  mixpanel: PropTypes.any
};

export default connect(mapStateToProps, null, null, { withRef: true })(StepNumber3);
