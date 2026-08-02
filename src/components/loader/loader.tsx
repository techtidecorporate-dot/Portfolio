import Icon from '../../assets/fav-icon-2.svg';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
            <div className="relative flex items-center justify-center">
                <div className="absolute size-22 rounded-full bg-black/50 animate-ping" />
                <div className="relative size-20 rounded-full bg-primary">
                    <img className='w-full h-full object-contain' src={Icon} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Loader;