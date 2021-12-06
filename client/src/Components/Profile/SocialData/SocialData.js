function SocialData({data}) {
    
    return (
        <section>
            <p>{Object.keys(data)}: {data.name}</p>
        </section>
    );
}

export default SocialData;