import { Geist, Geist_Mono } from "next/font/google";
// 1. 在顶部引入你的图表组件 (注意核对相对路径，比如 './components/barChart' 或者 '../components/barChart')
import BarChart from '../../components/barChart'; 
import ScatterPlot from '../../components/scatterPlot';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 font-sans dark:bg-black p-10`}
    >
      <main className="mx-auto flex max-w-5xl flex-col gap-8">
        
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
          assignment 5 !!!
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          这里是我的数据可视化作业。
        </p>

        {/* 👇 替换成你的图表 👇 */}
        <div className="flex flex-col gap-8 w-full">
          
          {/* 第一个框：放柱状图 */}
          <div className="flex min-h-[500px] w-full items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
             <BarChart />
          </div>

          {/* 第二个框：放散点图 */}
          <div className="flex min-h-[500px] w-full items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
             <ScatterPlot />
          </div>

        </div>
        
      </main>
    </div>
  );
}