import './index.css';

function MessageTopBox({message}) {
  return (
    <div className="message-top-box__container">
        <div className="content">
            <p>{message}</p>
        </div>
    </div>
  );
}

export default MessageTopBox;
