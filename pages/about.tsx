
export async function getServerSideProps() {
    // Fetch data from external API
    //const res = await fetch(`https://d23rsokg4xfiei.cloudfront.net/api/hello`)
    const data = { a: 1 }

    // Pass data to the page via props
    return { props: { data } }
}

const About: React.FC<{
    data: any
}> = ({ data }) => {

    console.log({ data })
    return (
        <div>About me</div>
    )
}

export default About;