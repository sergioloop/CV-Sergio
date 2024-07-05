import { useTranslation } from "react-i18next";
import PdfDownLoad from "./PdfDownLoad";
import UnOrderedList from "./UnOrderedList";
import { DownLoadPDF } from "./svg";
import { firstCharAtToUpperCase } from "../utils";
export default function CardDownload() {
  const { t } = useTranslation();
  return (
    <section className="group relative col-span-2  flex flex-col items-center justify-center pr-4">
      <button title={`${firstCharAtToUpperCase(t("download"))} CV`}>
        <DownLoadPDF height="1.5em" width="1.5em" fill="red" />
      </button>
      <UnOrderedList addclass="hidden group-hover:absolute top-full w-40 py-8 -left-40 md:-left-20 group-hover:flex ">
        <article className="bg-white w-full  flex flex-col rounded-lg border-2 border-[#575757] overflow-hidden">
          <PdfDownLoad name="CV_En_Sergio_Lopez_Garcia" lang="EN" />
          <PdfDownLoad name="CV_Es_Sergio_Lopez_Garcia" lang="ES" />
          <PdfDownLoad name="CV_cat_Sergio_Lopez_Garcia" lang="CAT" />
        </article>
      </UnOrderedList>
    </section>
  );
}
