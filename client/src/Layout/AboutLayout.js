import React from 'react'

function AboutLayout() {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className='col-lg-12'>
                        <h3 style={{ marginBottom: "20px", textAlign: "center",fontWeight:"bold" }}>About us</h3>
                        <div className="row">
                            <div className='col-lg-12' >
                                <h4 >Sejarah Perusahaan (Company History)</h4>
                                <p>CV. Hanson Prima Engineering didirikan pada tanggal 28 Maret 2003, yang beralamat kantor 
                                di Jl. Krakatau Komp. Krakatau Asri Blok C no.11 – Medan dan memiliki warehouse di Kompleks Multiguna, Jl Selayar No 6, KIM II, Mabar, Saentis, Percut Sei Tuan, Deli Serdang. CV. Hanson Prima
                                Engineering adalah perusahaan yang bergerak dalam bidang penjualan
                                (sole distributor) dan servis untuk produk-produk kebutuhan pabrik
                                pengolahan kelapa sawit, pabrik gula, crumb rubber, pulp & paper dan lain-lain beserta jasa (sevice after sales dan technical support). Adapun
                                produk-produk yang disupply / diageni adalah sebagai berikut :
                                    <img alt="about-us" rel="noopener noreferrer" src={process.env.PUBLIC_URL + '/Assets/img/Corporate/corp1.jpg'} style={{ width: '300px', height: '300px', float: 'left', padding: '10px 30px 20px 0px' }} />
                                    <ul>
                                        <li> Pompa & Spareparts, Merk : Kewpump (Malaysia)</li>
                                        <li>Conveyor Chain & Sprockets, Merk : Brooks Andell (U.K.)</li>
                                        <li>Power Transmission Products, Merk : Challenge (U.K.)
                                        ( Belting, Pulley & Taperlock Bush, Coupling, Bearing, SMSR,
                                                Roller Chain dan produk transmission lainnya )</li>
                                        <li>Gearbox & Gearmotor, Merk : Benzlers, Radicon, Elecon (U.K./India)</li>
                                    </ul>
                                </p>
                                <p> Barang yang disupply adalah original brand dan langsung dari pabrik
                                yang menunjuk CV. Hanson Prima Engineering sebagai authorized distributor
                                    (agen) di Indonesia.</p>


                            </div>

                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className='col-lg-12'>
                        <p style={{ float: 'left' }}>CV. Hanson Prima Engineering adalah authorized distributor terutama untuk
                        produk kebutuhan pabrik kelapa sawit sejak tahun 2003, disamping itu juga
                        menyediakan jasa servis untuk produk yang diageni sebagai technical
                        support service dari CV. Hanson Prima Engineering untuk customer /
                        rekanannya. Disamping itu perusahaan juga secara berkala mengadakan seminar atau training untuk
                        perusahaan atau pabrik yang membutuhkan. Seminar / Training pernah diadakan CV. Hanson Prima Engineering di lokasi
                        pabrik Musim Mas Group dan di beberapa perusahaan pabrik kelapa sawit
                        lainnya baik yang ada di wilayah Sumatera Utara maupun di luar kota /
                        provinsi.
                        Dari sejak berdirinya hingga sekarang CV. Hanson Prima Engineering telah
                        mendapat rekanan/customer dari berbagai perusahaan baik yang ada di wilayah
Sumatera maupun di luar wilayah Sumatera (terlampir customer list).</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-lg-12'>

                        <h4 style={{ textAlign: 'center' }}>Nilai-nilai Perusahaan (Value of Company)</h4>
                        <p style={{ float: 'left' }}>
                            <ol>
                                <li>Kepercayaan & Tanggung Jawab (Trustworthiness & Responsible)
                                merupakan ciri khas dari perusahaan untuk dipercayakan dalam
                                pekerjaan yang diberikan oleh pelanggan.</li>
                                <li>Pelayanan (Serve)
                                memberikan pelayanan yang memuaskan untuk pelanggan dengan
                                sepenuh hati, transparan dan yang terbaik</li>
                                <li>Kepedulian (Caring)
                                membangun dan memastikan hubungan antar internal maupun
                                eksternal secara peduli demi meningkatkan kesejahteraan perusahaan</li>
                                <li>Profesionalisme yang Disiplin (Diciplined Professionalism)
                                sebagai perusahaan yang professional, setiap pekerjaan yang
                                dilakukan dengan cepat, tepat & akurat</li>
                                <li>Kerjasama (Teamwork)
                                membangun kerjasama tim yang sehat & kuat</li>
                            </ol>
                        </p>
                    </div>
                </div>
                <div className="row">
                            <div className='col-lg-12' > 
                                <h4>Visi Perusahaan (Company Vision)</h4>
                                <p>Menjadi perusahaan yang akan berkembang lebih maju lagi bersama dengan perusahaan rekanan</p>
                                <h4>Misi perusahaan (Company Mission)</h4>
                                <p>
                                    <ol>
                                        <li>Menjadi mitra usaha yang handal dan terpercaya</li>
                                        <li>Mengutamakan kepuasan pelanggan</li>
                                        <li>Teknologi yang handal serta didukung oleh SDM yang kompeten</li>
                                    </ol>
                                    CV. Hanson Prima Engineering didukung oleh staff / karyawan tetap yang
                                    berpengalaman di
                                    bidangnya masing-masing.                                
                                </p>
                            </div>
                        </div>
            </div>
        </section>
    )
}

export default AboutLayout
