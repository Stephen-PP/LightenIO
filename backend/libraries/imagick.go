package libraries

func InitializeImagick() {
	imagick.Initialize()
	// Schedule cleanup
	defer imagick.Terminate()
}
