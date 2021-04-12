import { useState } from "react"

interface Props {

}

export default function ContactForm(props: Props) {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = () => {
        const data = { name, mail, category, text };

        console.log(data);
    }

    return (
        <form className="ContactForm">
            <div className="formGroup">
                <input
                    required
                    type="text"
                    placeholder="navn:"
                    onChange={e => setName(e.target.value)} />
            </div>

            <div className="formGroup">
                <input
                    required
                    type="email"
                    placeholder="mail:"
                    onChange={e => setMail(e.target.value)} />
            </div>

            <div className="formGroup">
                <input
                    required
                    type="text"
                    placeholder="emne:"
                    onChange={e => setCategory(e.target.value)} />
            </div>

            <div className="formGroup textarea">
                <textarea
                    required
                    placeholder="meddelelse:"
                    onChange={e => setText(e.target.value)}
                />
            </div>

            <div className="formGroup">
                <input
                    onClick={handleSubmit}
                    type="button"
                    value="indsend"
                />
            </div>
        </form>
    )
}