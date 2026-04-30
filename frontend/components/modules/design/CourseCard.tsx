import { Card } from '@/components/ui/card'

interface CourseCardProp{
    title: string
    subtitle: string
    number: number
}
const CourseCard = ({title, subtitle, number}: CourseCardProp) => {
  return (
     <Card className="bg-[#F9EBEC] text-[#C33241] p-8 xl:p-12">
            <div className="xl:-rotate-90 my-8">
                <p className="text-3xl mb-2 font-semibold">{title}</p>
                <p className="text-base">{subtitle}</p>
            </div>
            <div className="flex items-start leading-none">
              <span className="text-[150px] font-bold tracking-wider">{number}</span>
              <span className="text-6xl font-semibold mt-1.5"> +</span>
            </div>
          </Card>
  )
}

export default CourseCard