import {
    EmailIcon,
    LinkedinIcon,
    FacebookIcon,
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

function SocialSharing(props:any){

    const postLink:string = props.postLink;

    return <>
     <EmailShareButton
          url={postLink}
          children={<EmailIcon size={32} round={true} />}
        ></EmailShareButton>
        <FacebookShareButton
          url={postLink}
          children={<FacebookIcon size={32} round={true} />}
        ></FacebookShareButton>
        <LinkedinShareButton
          url={postLink}
          children={<LinkedinIcon size={32} round={true} />}
        ></LinkedinShareButton>
        <TwitterShareButton
          url={postLink}
          children={<TwitterIcon size={32} round={true} />}
        ></TwitterShareButton>
        <WhatsappShareButton
          url={postLink}
          children={<WhatsappIcon size={32} round={true} />}
        ></WhatsappShareButton>

    </>

}

export default SocialSharing;