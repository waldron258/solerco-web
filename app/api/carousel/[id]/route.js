import {
  deleteDocument,
  getDocument,
  updateDocument,
} from "@/app/lib/firebase/firebase";

const request = async (req, res) => {
  const itemId = req.query.id;

  if (req.method === "GET") {
    try {
      const carouselItem = await getDocument("carousel", itemId);
      if (carouselItem.status) {
        res.status(200).json(carouselItem.data);
      } else {
        res.status(404).json({ error: "Carousel item not found" });
      }
    } catch (error) {
      console.error("Error fetching carousel item: ", error);
      res.status(500).json({ error: "Unable to fetch carousel item" });
    }
  } else if (req.method === "PUT") {
    try {
      const { title, imageUrl } = req.body;
      await updateDocument("carousel", { title, imageUrl }, itemId);
      res.status(200).json({ message: "Carousel item updated successfully" });
    } catch (error) {
      console.error("Error updating carousel item: ", error);
      res.status(500).json({ error: "Unable to update carousel item" });
    }
  } else if (req.method === "DELETE") {
    try {
      await deleteDocument("carousel", itemId);
      res.status(200).json({ message: "Carousel item deleted successfully" });
    } catch (error) {
      console.error("Error deleting carousel item: ", error);
      res.status(500).json({ error: "Unable to delete carousel item" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default request;
