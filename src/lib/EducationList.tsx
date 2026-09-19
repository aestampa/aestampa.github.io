import UCCSLogo from "../assets/UCCS.png";
import GTLogo from "../assets/GeorgiaTech.png";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

function EducationList() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <Item>
        <ItemMedia variant="icon">
            <img src={UCCSLogo} alt="UCCS logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>University of Colorado, Colorado Springs</ItemTitle>
          <ItemDescription className="text-white">
            Bachelor of Science in Computer Science
          </ItemDescription>
          <ItemDescription className="text-white text-xs">
            Summa Cum Laude
          </ItemDescription>
          <ItemDescription className="text-white text-xs">
            August 2020 - August 2023
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemMedia variant="icon">
            <img src={GTLogo} alt="Georgia Tech logo" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Georgia Institute of Technology</ItemTitle>
          <ItemDescription className="text-white">
            Master of Science in Computer Science
          </ItemDescription>
          <ItemDescription className="text-white text-xs">
            Focus on Human-Computer Interaction
          </ItemDescription>
          <ItemDescription className="text-white text-xs">
            August 2024 - December 2026
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}

export default EducationList;