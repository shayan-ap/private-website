import { Footer } from "flowbite-react";
function MyFooter() {
  return (
    <>
      <Footer container className="bg-newgray rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand />
            <Footer.LinkGroup>
              <Footer.Link href="#" className="text-white">
                About
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" className="text-white">
                Licensing
              </Footer.Link>
              <Footer.Link href="#" className="text-white mr-3">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider className="bg-gray-400" />
          <Footer.Copyright
            href="#"
            by="Flowbite™"
            year={2022}
            className="text-white"
          />
        </div>
      </Footer>
    </>
  );
}

export default MyFooter;
