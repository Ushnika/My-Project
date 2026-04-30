import img1 from "@/assets/images/img1.svg";
import img2 from "@/assets/images/img2.svg";
import img3 from "@/assets/images/img3.svg";
import img4 from "@/assets/images/img4.svg";
import CourseCard from "@/components/modules/design/CourseCard";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CoursePage() {
  return (
    <div className="p-4 lg:p-10 2xl:p-24 mx-auto container">
      <div className="mb-4">
        <h3 className="text-xl mb-3">
          Explore our classes and master trending skills!
        </h3>
        <h1 className="text-2xl font-bold">
          Dive Into{" "}
          <span className="text-[#1DA077]">What&apos; Hot Right Now!</span> 🔥
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Card className="bg-[#C33241] text-white p-10 justify-between">
          <div className="flex justify-end items-center gap-1">
            <p className="text-base font-medium">View all Courses</p>
            <ArrowRight className="size-4" />
          </div>
          <div className="flex flex-wrap gap-2 justify-between">
            <Image src={img1} alt="icon" width={80} height={80} />
            <Image src={img2} alt="icon" width={80} height={80} />
            <Image src={img3} alt="icon" width={80} height={80} />
            <Image src={img4} alt="icon" width={80} height={80} />
          </div>
          <div className="lg:inline-flex items-center gap-4">
            <div className="flex items-start leading-none">
              <span className="text-[150px] font-bold tracking-wider">23</span>
              <span className="text-6xl font-semibold mt-1.5"> +</span>
            </div>
            <div>
              <p className="text-3xl mb-2 font-medium">All Courses</p>
              <p className="text-base font-light mr-24">
                courses you&apos;re powering through right now.
              </p>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 justify-between">
          <CourseCard
            title="Upcoming Courses"
            subtitle="exciting new courses waiting to boost your skills."
            number={0o5}
          />
          <CourseCard
            title="Ongoing Courses"
            subtitle="currently happening- don't miss out on the action!"
            number={10}
          />
        </div>
      </div>
    </div>
  );
}
