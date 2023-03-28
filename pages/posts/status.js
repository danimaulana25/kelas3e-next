import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function FirstStatus({ data }) {
    return (
        <Layout>
            <Head>
                <title>EPEP MAX</title>
            </Head>
            <Image src="/images/FreeFire.jpg" height={160} width={120} alt="FreeFire"></Image>
            <h1>First Status at Kelas 3E</h1>
            <Link href="/">Kembali ke halaman utama </Link>
            {data.map((dat) => {
                return (
                    <p>{dat.nama}</p>
                );
            })}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://my-json-server.typicode.com/danimaulana25/latihanjson/organisasi`);
    const data = await res.json()

    return { props: { data } }
}