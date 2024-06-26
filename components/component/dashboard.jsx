/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SmXpFgeAyoB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      <aside className="w-64 p-6 space-y-6 bg-[#2c2c2c]">
        <div className="flex items-center space-x-2">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Advertising</h3>
            <ul className="mt-2 space-y-2">
              <li>Perancanaan</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Project Akhir</h3>
            <ul className="mt-2 space-y-2">
              <li>Learning Path</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Personalisasi</h3>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <Button variant="ghost">Pemula</Button>
            <Button variant="ghost">Menengah</Button>
            <Button variant="ghost">Ahli</Button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <Button variant="ghost">Lambat</Button>
            <Button variant="ghost">Sedang</Button>
            <Button variant="ghost">Cepat</Button>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button variant="ghost">Indonesia</Button>
            <Button variant="ghost">Inggris</Button>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Digital Marketing 101</h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6" />
            <CircleUserIcon className="w-6 h-6" />
            <select className="bg-transparent">
              <option>EN</option>
              <option>ID</option>
            </select>
          </div>
        </header>
        <article className="mt-6 space-y-6">
          <p>
            Digital marketing, also known as online marketing, is a form of marketing that utilizes digital channels to
            promote products or services. It involves various strategies and tactics to reach target audiences
            effectively and efficiently. The core of digital marketing is connecting with audiences online, which
            requires understanding their demographics, behaviors, and preferences. This understanding is crucial for
            creating content that resonates with them and drives engagement, conversion, and loyalty.
          </p>
          <p>
            Digital marketing encompasses a wide range of channels and tactics, including social media marketing, email
            marketing, search engine optimization (SEO), content marketing, and more. These channels are used to promote
            products, services, or brands, and they can be targeted to specific demographics or interests. The primary
            goals of digital marketing are to increase brand awareness, drive website traffic, generate leads, and boost
            sales.
          </p>
          <p>
            One of the key advantages of digital marketing is its cost-effectiveness. Compared to traditional marketing
            methods like print or television ads, digital marketing can be more affordable and offer better metrics for
            measuring success. Additionally, digital marketing allows for real-time tracking and analysis of campaign
            performance, enabling adjustments to be made quickly to optimize results.
          </p>
          <div className="flex space-x-2">
            <Button variant="secondary">Bounce Rate</Button>
            <Button variant="secondary">Engagement</Button>
            <Button variant="secondary">Affiliate Marketing</Button>
            <Button variant="secondary">A/B Testing</Button>
            <Button variant="secondary">SEO</Button>
            <Button variant="secondary">CTR</Button>
            <Button variant="secondary">Explain More...</Button>
          </div>
        </article>
        <section className="mt-6">
          <h2 className="text-xl font-bold">Referensi</h2>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <Card className="bg-[#333333]">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">Digital Marketing: Pengertian dan...</h3>
                <p className="text-sm">Digital marketing merupakan rangkaian...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333]">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">Digital Marketing: Pengertian dan...</h3>
                <p className="text-sm">Digital marketing merupakan rangkaian...</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333]">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">Digital Marketing: Pengertian dan...</h3>
                <p className="text-sm">Digital marketing merupakan rangkaian...</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-bold">Resources</h2>
          <div className="mt-4 flex space-x-4">
            <Card className="bg-[#333333] w-1/2">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">Ultimate Guide to Digital Marketing</h3>
                <p className="text-sm">.pdf</p>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] w-1/2">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">Building an Internet Marketing Strategy</h3>
                <p className="text-sm">.pdf</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-bold">Project Akhir</h2>
          <div className="mt-4 flex space-x-4">
            <Card className="bg-[#333333] w-1/2">
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <h3 className="font-bold">SEO Marketing Case Study</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm">10 Bab</p>
                  <Button className="w-1/3" variant="secondary">
                    Simpan & Mulai Belajar
                  </Button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm">3 Long video</p>
                  <p className="text-sm">1 Quiz</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm">8 Ringkasan</p>
                  <p className="text-sm">2 Mini-Project</p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm">Estimated : 8 hours</p>
                </div>
              </CardContent>
            </Card>
            <div className="w-1/2 space-y-4">
              <Card className="bg-[#333333]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <h3 className="font-bold">More Video</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <Card className="bg-[#333333]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <h3 className="font-bold">Video 1</h3>
                        <p className="text-sm">Description of Video 1</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-[#333333]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <h3 className="font-bold">Video 2</h3>
                        <p className="text-sm">Description of Video 2</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#333333]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <h3 className="font-bold">More Resources</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <aside className="w-64 p-6 space-y-6 bg-[#2c2c2c]">
        <div className="space-y-4">
          <Card className="bg-[#333333]">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <h3 className="font-bold">Video 1</h3>
              <p className="text-sm">Description of Video 1</p>
            </CardContent>
          </Card>
          <Card className="bg-[#333333]">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <h3 className="font-bold">Video 2</h3>
              <p className="text-sm">Description of Video 2</p>
            </CardContent>
          </Card>
        </div>
        <div className="absolute bottom-6 right-6">
          <Button className="w-full" variant="secondary">
            Simpan & Mulai Belajar
          </Button>
        </div>
      </aside>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CircleUserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
