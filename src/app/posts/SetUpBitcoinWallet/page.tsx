import { Components } from "@/app/Components";
import { SetUpBitcoinWallet } from ".";

export default function Page() {
  return (
    <Components.Div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Components.Header />
      <SetUpBitcoinWallet.Content />
    </Components.Div>
  )
}