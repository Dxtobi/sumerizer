import { BsEmojiHeartEyes, BsTwitter } from "react-icons/bs";


function Footer() {
    return (
        <div className="text-center my-3">
            <div className="flex items-center gap-2 justify-center"><div>made with love</div> <BsEmojiHeartEyes size={20} color="#ff085a"/> By <BsTwitter size={30} color="#089aff"/> <div>@programmer_dex</div></div>
        </div>
    );
}

export default Footer;