import React, { Component } from "react";
import { Button, Image, Grid, Container, Divider, Header, Icon, Placeholder, Step, List } from "semantic-ui-react";
import "./style.scss";
import { AuthConsumer } from "../AuthContext";
export default class Landing extends Component {
	render() {
		return (
			<AuthConsumer>
				{() => (
					<React.Fragment>
						<header id="top">
							<div id="headercontain">
								<div id="welcome">Open Bidding<br />BADAN PENGURUS HARIAN<br />BEM FILKOM 2020</div>
								<span class="arrow animated bounce"></span>
							</div>
						</header>
						<Divider hidden />
						<Container>
							{/* <div className="ui middle aligned center aligned container">
								<h1>APA ITU INAUGURASI FILKOM?</h1>
								<p>Merupakan kegiatan penutup dari seluruh rangkaian kegiatan PK2MABA dan Startup Academy yang dilaksanakan dari, oleh, dan untuk mahasiswa baru. inaugurasi filkom bertujuan untuk melepas status mahasiswa baru menjadi bagian dari KBMFILKOM yang utuh serta kegiatan yang dapat menjadi wadah untuk mengembangkan minat dan bakat mahasiswa baru yang diharap dapat berekspresi dengan sekreatif dan sebaik mungkin, selain itu juga sebagai sarana agar mahasiswa baru saling mengenal satu sama lain dalam lingkup fakultas sehingga diharapkan mampu menciptakan sebuah solidaritas antar mahasiswa baru.</p>
							</div> */}
							<Header as='h1' style={{ marginBottom: 0}}>
								<Icon name='info circle' />
								<Header.Content>
									Visi & Misi
      								<Header.Subheader>Visi dan Misi BEM Filkom 2020</Header.Subheader>
								</Header.Content>
							</Header>
							<Grid stackable stretched centered style={{ marginTop: 0}}>
								<Grid.Row stretched style={{padding:35}}>
									<Placeholder fluid style={{ textAlign: "justify",padding:14,borderRadius:18 }}>
										<Placeholder.Paragraph >
											<Header size="huge" textAlign="center">Visi</Header>
											<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
												BEM FILKOM sebagai wadah dalam membangun nilai instrumental mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi FILKOM dan Indonesia
									</p>
										</Placeholder.Paragraph>
									</Placeholder >
								</Grid.Row>
								<Grid.Row stretched style={{padding:14}}>
									<Placeholder fluid  style={{ textAlign: "justify",padding:14, borderRadius:18  }}>
										<Placeholder.Paragraph>
											<Header size='huge' textAlign="center">Misi</Header>
											<List ordered >
												<List.Item>
													<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
														Membangun iklim internal bem filkom ub yang <strong>inklusif</strong> dan <strong>profesional</strong> bernafaskan kekeluargaan.
											</p>
												</List.Item>
												<List.Item>
													<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
														<strong>Bekerja sama</strong> secara <strong>dinamis</strong> dengan seluruh pemangku kepentingan demi terciptanya kreasi jangka panjang dan berkelanjutan.
											</p>
												</List.Item>
												<List.Item>
													<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
														<strong>Inisiator pergerakan</strong> mahasiswa yang peka terhadap isu sosial-politik.
											</p>
												</List.Item>
												<List.Item>
													<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
														Melakukan <strong>pengembangan</strong> kemahasiswaan yang <strong>suportif</strong> dan komprehensif guna tercapainya aktualisasi diri dan prestasi mahasiswa.
											</p>
												</List.Item>
												<List.Item>
													<p style={{ fontSize: 18, fontWeight: 1500, textAlign: "justify" }}>
														Optimalisasi <strong>pelayanan</strong> advokasi <strong>aktif progresif</strong> terkait dengan kebutuhan dan kesejahteraan mahasiswa.
											</p>
												</List.Item>
											</List>
										</Placeholder.Paragraph>
									</Placeholder>
								</Grid.Row>
							</Grid>
							<Divider section />
							<Header as='h1' style={{ marginBottom: 0}}>
								<Icon name='list alternate' />
								<Header.Content>
									Struktur Organisasi
      								<Header.Subheader>Struktur Kabinet dari BEM Filkom 2020</Header.Subheader>
								</Header.Content>
							</Header>

							<Grid centered style={{ marginTop: 5}}>
								<div style={{ width: "75%" }}>
									<Image src="./img/strukturkabinet.jpg" />
								</div>
							</Grid>

							<Divider section />
							<Header as='h1' >
								<Icon name='time' />
								<Header.Content >
									Timeline Open Bidding BPH
      								<Header.Subheader>Rangkaian kegiatan Opten BPH BEM Filkom 2020</Header.Subheader>
								</Header.Content>
							</Header>
							{/* <center><Button className="center"
								primary
								centered
							>
								<Button.Content visible><a href="http://bit.ly/ProsedurOprecStaff" target="_blank" style={{ 'color': 'white' }}>Baca Prosedurnya!</a></Button.Content>
							</Button></center> */}
							<Step.Group widths={4}>
								<Step>
									<Icon color="olive" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>Tanggal</Step.Title>
										<Step.Description>18:00 WIB</Step.Description>
										<Step.Description>Pendaftaran dibuka</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="red" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>Tanggal</Step.Title>
										<Step.Description>24:00 WIB</Step.Description>
										<Step.Description>Pendaftaran ditutup dan Pengumpulan Berkas</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="blue" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>Tanggal</Step.Title>
										<Step.Description>Open Bidding Wawancara</Step.Description>
									</Step.Content>
								</Step>
								<Step>
									<Icon color="green" name='calendar alternate outline' />
									<Step.Content>
										<Step.Title style={{ fontSize: 14 }}>Tanggal</Step.Title>
										<Step.Description>Pengumuman</Step.Description>
									</Step.Content>
								</Step>
							</Step.Group>
							<br></br>
							{/* {<center><Button className="center"
								primary
								centered
							>
								<Button.Content visible><a href="http://bit.ly/BerkasOprecStaffInau" target="_blank" style={{ 'color': 'white' }}>Download Form Offline</a></Button.Content>
							</Button></center>} */}
							{/* <br></br> */}
							<div className="ui middle aligned center aligned container">
								<p style={{ fontSize: 15, fontWeight: 1500}}><blockquote>"The Time is Always Right to Do What is Right"</blockquote> 
									<b>-Martin Luther King Junior-</b></p>
								<Button
									animated="vertical"
									size="big"
									positive
									centered
									onClick={async () => {
										this.props.history.replace("/login");
									}}>
									<Button.Content visible>Daftar</Button.Content>
									<Button.Content hidden>Login</Button.Content>
								</Button>
							</div>
							<Divider hidden />
						</Container>
					</React.Fragment>
				)}
			</AuthConsumer>
		);
	}
}
