
export default function CategoryHeading({ children }: { children: string }) {
      return (
            <div>
                  <p>Browsing results for :</p>
                  <h3 className="text-2xl font-semibold">{children}</h3>
            </div>
      )
}
